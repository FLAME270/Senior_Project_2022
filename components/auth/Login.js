/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description:
*/

import React, {Component} from "react";
import{ View, Button, TextInput} from 'react-native'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }

        //MAkes a local call to the function onSighnUp
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
const {pasword, email, username} = this.state;
firebase.auth().createUserWithEmailOrUsernameAndPassword(email, password, username)
.then ((result) => {
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
                <TextInput style="font-family:Arial,Helvetica,sans-serif;"
                placeholder="Email"
                onChangeText={(email) => this.setState({email})}/>
<TextInput style="font-family:Arial,Helvetica,sans-serif;"
                placeholder="Password"
                onChangeText={(password) => this.setState({password})}/>
            </View>
        )
    }
}
export default Login