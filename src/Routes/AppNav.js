import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';
import Home from '../Screens/AppScreens/Home';
import MyTask from '../Screens/AppScreens/MyTask';
// import SignIn from '../Screens/AuthScreens/SignIn';
// import SignUp from '../Screens/AuthScreens/SignUp';

// const AuthStack = createStackNavigator(
//   {
//     SigninScreen: {
//       screen: SignIn,
//     },
//     SignupScreen: {
//       screen: SignUp,
//     },
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   },
// );

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    TaskScreen: {
      screen: MyTask,
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0, // Set the animation duration time as 0 !!
      },
    }),
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    // Auth: AuthStack,
    App: AppStack,
  },
  // {
  //   initialRouteName: 'Auth',
  // },
);

const InitialNavigation = createSwitchNavigator({
  splashScreen: AppStack,
  AppNavigator: {screen: AppStack},
});

export default AppContainer = createAppContainer(InitialNavigation);
