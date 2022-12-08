/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description:
*/

//MAkes a landing page with a register and login button

import React from "react";
import {Button, Text, View} from 'react-native'

export default function Landing(){
    return(
// Ensures all the content is in the center of the screen
        <View style={{flex: 1, justifyContent: 'center'}}>
<Button
title="Register"
onPress={() =>navigation.navagate("Register")} />
<Button
title="Sign Up"
onPress={() =>navigation.navagate("Login")} />
        </View>
    )
}