import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
export default function App() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        style={{borderRadius: 10, borderColor: 'blue', borderWidth: 1,margin:10}}
        placeholder='Enter Email...'
        onChangeText={(text)=>{
          setEmail(text)
        }}
      />
       <TextInput
        style={{borderRadius: 10, borderColor: 'blue', borderWidth: 1,margin:10}}
        placeholder='Enter Password...'
        onChangeText={(text)=>{
          setPassword(text)
        }}
      />
      <Button title='sign up' onPress={()=>{
        auth().createUserWithEmailAndPassword(Email,Password)
        .then(()=>{
          Alert.alert('User account created & signed in!')
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
      }}/>
       <Button title='Sign in' onPress={()=>{
          auth().signInWithEmailAndPassword(Email,Password)
         .then(()=>{
          Alert.alert("Login success!");
         }).catch(error=>{

         })
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin:10
  },
});
