
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// messaging().setBackgroundMessageHandler(async remoteMessage =>{
//   console.log('Message handler in the background',remoteMessage);
// })
AppRegistry.registerComponent(appName, () => App);