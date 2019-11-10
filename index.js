/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import firebase from 'firebase';

console.log('config firebase  === ', firebase);

AppRegistry.registerComponent(appName, () => App);
