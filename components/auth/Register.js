/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: This class handles the register functionality.
*/
import React, { Component } from 'react'
import{ View, Button, TextInput } from 'react-native'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

//Stores the users credentials in variables
export class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password:'',
            firstName: '',
            lastName: '',
            phoneNumber: ''

        }

        //MAkes a local call to the function onSighnUp
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
const {firstName, lastName, username, pasword, email, phoneNumber} = this.state;
firebase.auth().createUserWithEmailOrUsernameAndPassword(email, username, password)
//Return the results from the firebase server
.then ((result) => {
    firebase.firestore().collection("users")
    .doc(firebase.auth().currentUser.uid)
    .set({
        firstName, lastName, username, pasword, email, phoneNumber
    })
    console.log(result)
})
.catch((error) => {
    console.log(error)
})

    }

    //Render a view with textboxes that collect the register information
    render(){
        return(
            <View>
                <TextInput
                placeholder="First Name"
                onChangeText={(firstName) => this.setState({firstName})}/>
<TextInput
                placeholder="Last Name"
                onChangeText={(firstName) => this.setState({firstName})}/>
<TextInput
                placeholder="Username"
                onChangeText={(username) => this.setState({username})}/>
<TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}/>
<TextInput
                placeholder="Email"
                onChangeText={(email) => this.setState({email})}/>
                <Number
                placeholder="Phone Number"
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}/>

                <Button
                onPress={() => this.onSignUp()}
                title="Sign Up"/>
            </View>
        )
    }
}
export default Register