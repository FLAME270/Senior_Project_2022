/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: This is the core of the entire project, this class is the Main and handles all of the navigation and functionality of the entire application.
*/

//All the imports for the Famizone Social App
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'expo-asset';
//import * as firebase from 'firebase';
//import firebase from 'firebase/compat/app';
import _ from 'lodash';
import React, { Component } from 'react';
import { Image, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from 'redux';
import thunk from 'redux-thunk';
import LoginScreen from './frontend/components/auth/Login';
import RegisterScreen from './frontend/components/auth/Register';
import MainScreen from './frontend/components/Main';
import SaveScreen from './frontend/components/main/add/Save';
import ChatScreen from './frontend/components/main/chat/Chat';
import ChatListScreen from './frontend/components/main/chat/List';
import CommentScreen from './frontend/components/main/post/Comment';
import PostScreen from './frontend/components/main/post/Post';
import EditScreen from './frontend/components/main/profile/Edit';
import ProfileScreen from './frontend/components/main/profile/Profile';
import BlockedScreen from './frontend/components/main/random/Blocked';
import { container } from './frontend/components/styles';
import rootReducer from './frontend/redux/reducers';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import { registerRootComponent } from 'expo';
//import Routes from './src/Routes';


//Function that works with Redux to reduce the loading time of the application and help with middleware error logging.
console.log("Store here");
const store = configureStore(rootReducer, applyMiddleware(thunk))
console.log("Store end");
//Logs the time it takes to load each function and loggs it.
LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


//Configurations to connect to the Firebase database.
//Note: If Famazone is public on GitHub... for security reasons, you will need to add your own firebase connection string.
const firebaseConfig = {
  //Insert your firebase connection details here.
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  databaseURL: "m",
};

//Makes the logo globally accessable.
const logo = require('./assets/logo.png')

//Checks to see if firebase is still connected
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
  console.log("firebase connection initialized");
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  //Method to check if the user was succesfully logged in.
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <Image style={container.splash} source={logo} />
      )
    }

    //Checks if the user is authenticated and keeps the user on the login/register screen if they are not authenticated.
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
          <ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
            <Stack.Screen name="Register" component={RegisterScreen} navigation={this.props.navigation} options={{ headerShown: false }} />
            <Stack.Screen name="Login" navigation={this.props.navigation} component={LoginScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    //Once the user is logged in, they are directed to the main screen.
    return (
      
      <Provider store={store}>
        
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            
            {/* <Stack.Screen key={Date.now()} name="Main" component={MainScreen} navigation={this.props.navigation} options={({ route }) => {
              //The dashboard will have a feed of post and the option to navigate to other screens/pages
              const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
              console.log("index page loaded :)");
//Switch statement that lets the users choose navigation options.
              switch (routeName) {
                case 'Camera': {
                  return {
                    headerTitle: 'Camera',
                  };
                }
                case 'chat': {
                  return {
                    headerTitle: 'Chat',
                  };
                }
                case 'Profile': {
                  return {
                    headerTitle: 'Profile',
                  };
                }
                case 'Search': {
                  return {
                    headerTitle: 'Search',
                  };
                }
                case 'Feed':
                default: {
                  return {
                    headerTitle: 'Famizone Social',
                  };
                }
              }
            }}
            /> */}
            {/* Stack navigators that will re-direct the user to the page they want to go to when a button is clicked */}
            {/* <Stack.Screen key={Date.now()} name="Save" component={SaveScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="video" component={SaveScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="Post" component={PostScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="Chat" component={ChatScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="ChatList" component={ChatListScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="Edit" component={EditScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="Profile" component={ProfileScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="Comment" component={CommentScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="ProfileOther" component={ProfileScreen} navigation={this.props.navigation} />
            <Stack.Screen key={Date.now()} name="Blocked" component={BlockedScreen} navigation={this.props.navigation} options={{ headerShown: false }} /> */}
          </Stack.Navigator>
        </NavigationContainer>
        
      </Provider>
    )
  }
}

//Exports this class so that if can be accessed by other classes.
export default App