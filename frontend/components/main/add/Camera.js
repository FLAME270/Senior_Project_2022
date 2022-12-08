/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: Devices require a few level of permission before letting an app access the camera and gallery. So this class gets the pictures for a post and store it in a collection in the frirebase DB.
Source: https://docs.expo.dev/versions/latest/sdk/camera/
*/
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { Audio } from "expo-av";
import { Camera } from "expo-camera";
//import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as VideoThumbnails from 'expo-video-thumbnails';
import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { container, utils } from '../../styles';

//Sets limits to the picture size
const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);




//Function that lets users upload a video
export default function VideoScreen(props) {

    //Variable used to implement the photo/video galery.
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [isPreview, setIsPreview] = useState(false);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [isFlash, setIsFlash] = useState(false);
    const [isVideoRecording, setIsVideoRecording] = useState(false);
    const [type, setType] = useState(0);
    const [showGallery, setShowGallery] = useState(true)
    const [galleryItems, setGalleryItems] = useState([])
    const [galleryScrollRef, setGalleryScrollRef] = useState(null)
    const [galleryPickedImage, setGalleryPickedImage] = useState(null)
    const cameraRef = useRef();
    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
//Gets permission to access the camera, gallery, and mic.
            const cameraPermissions = await Camera.requestCameraPermissionsAsync();
            const galleryPermissions = await MediaLibrary.requestPermissionsAsync();

            const audioPermissions = await Audio.requestPermissionsAsync();

            //checks if permissions were granted and accesses the users photos if access was granted. The user can then pick a photo or video from their device.
            if (cameraPermissions.status === 'granted' && audioPermissions.status === 'granted' && galleryPermissions.status === 'granted') {
                const getPhotos = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'], mediaType: ['photo', 'video'] })
                setGalleryItems(getPhotos)
                setGalleryPickedImage(getPhotos.assets[0])
                setHasPermission(true)
            }
        })();
    }, []);
    //If the user wants to take a picture with their device, they can view what their camera sees.
    const onCameraReady = () => {
        setIsCameraReady(true);
    };
    //Take the picture
    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            const data = await cameraRef.current.takePictureAsync(options);
            const source = data.uri;
            //if the user likes the picture, they can save it.
            if (source) {
                props.navigation.navigate('Save', { source, imageSource: null, type })
            }
        }
    };

    //Record a video using your device.
    const recordVideo = async () => {
        if (cameraRef.current) {
            try {
//Set a default video quality.
                const options = { maxDuration: 60, quality: Camera.Constants.VideoQuality['480p'] }

//Saves the video or returns an error if save failed.
                const videoRecordPromise = cameraRef.current.recordAsync(options);
                if (videoRecordPromise) {
                    setIsVideoRecording(true);
                    const data = await videoRecordPromise;
                    const source = data.uri;
                    let imageSource = await generateThumbnail(source)
                    props.navigation.navigate('Save', { source, imageSource, type })

                }
            } catch (error) {
                console.warn(error);
            }
        }
    };

    //Makes a quick thumbnail for the video
    const generateThumbnail = async (source) => {
        try {
            const { uri } = await VideoThumbnails.getThumbnailAsync(
                source,
                {
                    time: 5000,
                }
            );
            return uri;
        } catch (e) {
            console.warn(e);
        }
    };

//Stops recording the video
    const stopVideoRecording = async () => {

        if (cameraRef.current) {
            setIsVideoRecording(false);
            cameraRef.current.stopRecording();
        }
    };
    //Lets user switch to the front/back camera if on a mobile device.
    const switchCamera = () => {
        if (isPreview) {
            return;
        }
        setCameraType((prevCameraType) =>
            prevCameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    //shows all the images the user picked and makes a thumbnail so user can see the picture they chose.
    const handleGoToSaveOnGalleryPick = async () => {
        let type = galleryPickedImage.mediaType == 'video' ? 0 : 1

        const loadedAsset = await MediaLibrary.getAssetInfoAsync(galleryPickedImage);
        let imageSource = null
        if (type == 0) {
            imageSource = await generateThumbnail(galleryPickedImage.uri)
        }

        props.navigation.navigate('Save', {
            source: loadedAsset.localUri,
            type,
            imageSource
        })
    }

    //Shows the rendered view for the UI
    const renderCaptureControl = () => (
        <View>
            <View style={{ justifyContent: 'space-evenly', width: '100%', alignItems: 'center', flexDirection: 'row', backgroundColor: 'white' }}>

                {/* Turn on/off the devices flash */}
                <TouchableOpacity disabled={!isCameraReady} onPress={() => setIsFlash(!isFlash)} >
                    <Feather style={utils.margin15} name={"zap"} size={25} color="black" />
                </TouchableOpacity>

                {/* Switch to the back/front camera */}
                <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
                    <Feather style={utils.margin15} name="rotate-cw" size={25} color="black" />
                </TouchableOpacity>
                {type == 0 ?
// Makes a button that will take a picture with a short touch and a video for a long touch.
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={!isCameraReady}
                        onLongPress={recordVideo}
                        onPressOut={stopVideoRecording}
                        style={styles.capture}
                    />
                    :
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={!isCameraReady}
                        onPress={takePicture}
                        style={styles.capturePicture}
                    />}

{/* await to trigger based off users decision to record or simply take a picture. */}
                <TouchableOpacity disabled={!isCameraReady} onPress={() => type == 1 ? setType(0) : setType(1)} >
                    <Feather style={utils.margin15} name={type == 0 ? "camera" : "video"} size={25} color="black" />
                </TouchableOpacity>

                {/* Opens up the gallery */}
                <TouchableOpacity onPress={() => setShowGallery(true)} >
                    <Feather style={utils.margin15} name={"image"} size={25} color="black" />
                </TouchableOpacity>
            </View>

        </View>

    );
    //Permission false -> camera does not open.
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text style={styles.text}>Permission is required to access the camera</Text>;
    }

    //This is the page that opens the users photo gallary and lets them scroll through and pick an image.
    if (showGallery) {
        return (
            <ScrollView
                ref={(ref) => setGalleryScrollRef(ref)}
                style={[container.container, utils.backgroundWhite]}>

                <View
                    style={[{ aspectRatio: 1 / 1, height: WINDOW_WIDTH }]}>
                    <Image
                        style={{ flex: 1 }}
                        source={{ uri: galleryPickedImage.uri }}

                        styles={[{ aspectRatio: 1 / 1, height: WINDOW_WIDTH }]}
                        ratio={'1:1'}

                    />
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: 20, marginVertical: 10, flexDirection: 'row' }}>

                    <TouchableOpacity
                        style={{ alignItems: 'center', backgroundColor: 'gray', paddingHorizontal: 20, paddingVertical: 10, marginRight: 15, borderRadius: 50, borderWidth: 1, borderColor: 'black' }}
                        onPress={() => handleGoToSaveOnGalleryPick()} >

                        <Text style={{ fontWeight: 'bold', color: 'white', paddingBottom: 1 }}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'gray', borderRadius: 50, borderWidth: 1, borderColor: 'black' }} onPress={() => setShowGallery(false)} >
                        <Feather style={{ padding: 10 }} name={"camera"} size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>

                    <FlatList
                        numColumns={3}
                        horizontal={false}
                        data={galleryItems.assets}

                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[container.containerImage, utils.borderWhite]}
                                onPress={() => { galleryScrollRef.scrollTo({ x: 0, y: 0, animated: true }); setGalleryPickedImage(item); }}>

                                <Image
                                    style={container.image}
                                    source={{ uri: item.uri }}
                                />

                            </TouchableOpacity>

                        )}

                    />
                </View>

            </ScrollView>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

            <View

                style={[{ aspectRatio: 1 / 1, height: WINDOW_WIDTH }]}>
                {isFocused ?
                    <Camera
                        ref={cameraRef}
                        style={{ flex: 1 }}
                        type={cameraType}
                        flashMode={isFlash ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                        styles={[{ aspectRatio: 1 / 1, height: WINDOW_WIDTH }]}
                        ratio={'1:1'}
                        onCameraReady={onCameraReady}
                    />
                    : null}

            </View>

            <View style={[{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
            }]}>
                <View>
                    {renderCaptureControl()}
                </View>

            </View>
        </View>
    );
}

//CSS like styleing for the camera functionalitty.
const style = StyleSheet.create({
    closeButton: {
        position: "absolute",
        top: 35,
        left: 15,
        height: closeButtonSize,
        width: closeButtonSize,
        borderRadius: Math.floor(closeButtonSize / 2),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c4c5c4",
        opacity: 0.7,
        zIndex: 2,
    },
    media: {
        ...StyleSheet.absoluteFillObject,
    },
    closeCross: {
        width: "68%",
        height: 1,
        backgroundColor: "black",
    },
    control: {
        position: "absolute",
        flexDirection: "row",
        bottom: 38,
        width: "100%",

        alignItems: "center",
        justifyContent: "center",
    },
    recordIndicatorContainer: {
        flexDirection: "row",
        position: "absolute",
        top: 0,
        opacity: 0.7,
    },
    recordTitle: {
        fontSize: 14,
        color: "black",
        textAlign: "center",
    },
    recordDot: {
        borderRadius: 3,
        height: 6,
        width: 6,
        backgroundColor: "#ff0000",
        marginHorizontal: 5,
    },
    text: {
        color: "#000000",
    },

    capture: {
        backgroundColor: "red",
        borderRadius: 5,
        height: captureSize,
        width: captureSize,
        borderRadius: Math.floor(captureSize / 2),
        marginHorizontal: 31,
    },
    capturePicture: {
        borderWidth: 6,
        borderColor: 'gray',
        backgroundColor: "white",
        borderRadius: 5,
        height: captureSize,
        width: captureSize,
        borderRadius: Math.floor(captureSize / 2),
        marginHorizontal: 31,
    },
});