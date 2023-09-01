import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import IntroScreen from '../Screens/IntroScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './CustomHeader'; 
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
interface props{
    //navigation:any;
      }
interface state{}
export default class AuthNavigator extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
          <Stack.Navigator  screenOptions={{ header: (props) => <CustomHeader {...props} />, // Use the custom header
                                       }}
      >  
          <Stack.Screen name="Intro" options={{ title: 'Intro Screen' }}>
           {(props) => <IntroScreen {...props} />}
          </Stack.Screen>
         <Stack.Screen name="Login" options={{ title: 'Login Screen' }}>
          {(props) => <LoginScreen {...props} />}
         </Stack.Screen>
         <Stack.Screen name="SignUp" options={{ title: 'SignUp Screen' }}>
          {(props) => <SignUpScreen {...props} />}
          </Stack.Screen>
         <Stack.Screen name="Forgot" options={{ title: 'ForgotPassword' }}>
          {(props) => <ForgotPassword {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
     
    );
  }
    
  }
