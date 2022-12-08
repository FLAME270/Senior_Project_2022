/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: This class handles all the editing functionality.
*/

//imports
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Updates from 'expo-updates';
import firebase from 'firebase/compat/app';
//import firebase from 'firebase';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserFeedPosts } from '../../../redux/actions/index';
import { container, form, navbar, text, utils } from '../../styles';

require('firebase/firestore')

//edit function that allows users to edit their profile and the bio.
function Edit(props) {
    const [name, setName] = useState(props.currentUser.name);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(props.currentUser.image);
    const [imageChanged, setImageChanged] = useState(false);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

//Allows user to log out of their account
    const onLogout = async () => {
        firebase.auth().signOut();
        Updates.reloadAsync()
    }

//If chnged, then set a new description/bio.
    useEffect(() => {
        (async () => {
            if (props.currentUser.description !== undefined) {
                setDescription(props.currentUser.description)
            }

        })();
    }, []);

    //Shows a green checkmark that saves changes made to the profile.
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (

                <Feather style={navbar.image} name="check" size={24} color="green" onPress={() => { console.log({ name, description }); Save() }} />
            ),
        });
    }, [props.navigation, name, description, image, imageChanged]);

//A user can pick an image for their profile picture.
    const pickImage = async () => {
        if (true) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.cancelled) {
                setImage(result.uri);
                setImageChanged(true);
            }
        }
    };

//Save the new profile picture, then upload it to the firebase DB.
    const Save = async () => {
        if (imageChanged) {
            const uri = image;
            const childPath = `profile/${firebase.auth().currentUser.uid}`;

            const response = await fetch(uri);
            const blob = await response.blob();

            const task = firebase
                .storage()
                .ref()
                .child(childPath)
                .put(blob);

            const taskProgress = snapshot => {
                console.log(`transferred: ${snapshot.bytesTransferred}`)
            }
//Turn the image into a url stored in a firebase bucket.
            const taskCompleted = () => {
                task.snapshot.ref.getDownloadURL().then((snapshot) => {
//pushes the updated name, description and image to firebase.
                    firebase.firestore().collection("users")
                        .doc(firebase.auth().currentUser.uid)
                        .update({
                            name,
                            description,
                            image: snapshot,
                        }).then(() => {
                            props.updateUserFeedPosts();
                            props.navigation.goBack()

                        })
                })
            }
//log the information pushed to firebase.
            const taskError = snapshot => {
                console.log(snapshot)
            }

            task.on("state_changed", taskProgress, taskError, taskCompleted);
        } else {
            saveData({
                name,
                description,
            })
        }
    }

    //Saves the data if they change someting and goes back.
    const saveData = (data) => {
        firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update(data).then(() => {
                props.updateUserFeedPosts();

                props.navigation.goBack()
            })
    }

    return (
        <View style={container.form}>
{/* Lets the user pich a profile image from their photos */}
            <TouchableOpacity style={[utils.centerHorizontal, utils.marginBottom]} onPress={() => pickImage()} >
                {image == 'default' ?
                    (
                        <FontAwesome5
                            style={[utils.profileImageBig, utils.marginBottomSmall]}
                            name="user-circle" size={80} color="black" />
                    )
                    :
                    (
                        <Image
                            style={[utils.profileImageBig, utils.marginBottomSmall]}
                            source={{
                                uri: image
                            }}
                        />
                    )
                }
                <Text style={text.changePhoto}>Change Profile Photo</Text>
            </TouchableOpacity>

{/* frontend UI that Lets the user chang their name */}
            <TextInput
                value={name}
                style={form.textInput}
                placeholder="Name"
                onChangeText={(name) => setName(name)}
            />
            {/* frontend UI that Lets the user chang their BIO */}
            <TextInput
                value={description}
                style={[form.textInput]}
                placeholderTextColor={"#e8e8e8"}
                placeholder="Description"
                onChangeText={(description) => { setDescription(description); }}
            />
            {/* Logout button */}
            <Button
                title="Logout"
                onPress={() => onLogout()} />
        </View>

    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
})

//map the actions preformed on this page.
const mapDispatchProps = (dispatch) => bindActionCreators({ updateUserFeedPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Edit);
