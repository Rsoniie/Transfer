/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from './services/firebaseService'; 
import BackgroundTask from './services/backgroundTask'

AppRegistry.registerComponent(appName, () => App);
