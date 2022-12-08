/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description:  Any user that is blocked or banned will see this page.
*/

import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';

//If a user blocks someone, the person they blocked will get kicked back a page if they try to visit their profile.
export default function Blocked() {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (
        //If a user was blocked or banned display a "your account has been blocked" message.
        <View style={{ height: '100%' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', height: '90%' }}>

                <Feather name="stop-circle" size={150} color="red" style={{ position: 'absolute' }} />
                <Text style={[{ textAlign: 'center', paddingHorizontal: 40, fontSize: 20, marginTop: 400, width: '100%' }]}>Your account has been blocked</Text>

            </View>
        </View>
    )
}


