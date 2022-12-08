/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: Allows the user to search for a user.
*/
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryUsersByUsername } from '../../../redux/actions/index';
import { container, text, utils } from '../../styles';

require('firebase/firestore');

//Search method that looks for matches in the database and returns results.
function Search(props) {
    const [users, setUsers] = useState([])
    return (
        <View style={[utils.backgroundWhite, container.container]}>
            <View style={{ marginVertical: 30, paddingHorizontal: 20 }}>
                <TextInput
                    style={utils.searchBar}
                    placeholder="Type Here..."
                    onChangeText={(search) => props.queryUsersByUsername(search).then(setUsers)} />
            </View>

{/* Returns a flat list with the search results */}
            <FlatList
                numColumns={1}
                horizontal={false}
                data={users}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[container.horizontal, utils.padding10Sides, utils.padding10Top]}
                        onPress={() => props.navigation.navigate("Profile", { uid: item.id, username: undefined })}>

                        {item.image == 'default' ?
                            (
                                <FontAwesome5
                                    style={[utils.profileImage, utils.marginBottomSmall]}
                                    name="user-circle" size={50} color="black" />

                            )
                            :
                            (
                                <Image
                                    style={[utils.profileImage, utils.marginBottomSmall]}
                                    source={{
                                        uri: item.image
                                    }}
                                />
                            )
                        }
                        <View style={utils.justifyCenter}>
                            <Text style={text.username}>{item.username}</Text>
                            <Text style={text.name} >{item.name}</Text>
                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}
//mimicking the original object, but with every action creator wrapped into the dispatch call. So it returns functions faster  
const mapDispatchProps = (dispatch) => bindActionCreators({ queryUsersByUsername }, dispatch);

//Exports the search results 
export default connect(null, mapDispatchProps)(Search);