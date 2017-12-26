import React, { Component } from "react";

import { Icon } from "native-base";

import HomeScreen from "./HomeScreen.js";

import HomeHeader from "../HomeHeader.js";

import ProfileScreen from "../ProfileScreen/Profile.js";

import ListScreen from '../ListScreen/ListScreen.js';

import MomentsScreen from '../MomentsScreen/MomentsScreen.js';

import HighLightScreen from '../HighLightScreen/HighLightScreen.js';

import Notifications from './Notifications';

import NotificationsHeader from "../NotificationsHeader.js";

import Messages from './Messages';

import MessagesHeader from "../MessagesHeader.js";

import SearchScreen from './SearchScreen.js';

import SearchHeader from "../SearchHeader.js";

import SideBar from "../SideBar/SideBar.js";

import {StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

const HomeScreenStack = StackNavigator({
    Home: { screen: HomeScreen,
      navigationOptions: { header: props => <HomeHeader {...props} />}
    },
  },
  {
    headerMode: 'none',
  }
);

const SearchScreenStack = StackNavigator({
    Search: { screen: SearchScreen,
      navigationOptions: { header: props => <SearchHeader {...props} />}
    },
  },
  {
    headerMode: 'none',
  }
);

const NotificationsStack = StackNavigator({
    Notifications: { screen: Notifications,
      navigationOptions: { header: props => <NotificationsHeader {...props} />}
    },
  },
  {
    headerMode: 'none',
  }
);   

const MessagesStack = StackNavigator({
    Messages: { screen: Messages,
      navigationOptions: { header: props => <MessagesHeader {...props} />}
    },
  },
  {
    headerMode: 'none',
  }
);

const HomeScreenTab = TabNavigator({
  
      Home: {screen: HomeScreenStack,      
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => <Icon name='home'  style={{ color: tintColor }} /> ,
        },
      },
      
      Search: { screen: SearchScreenStack,
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => <Icon name='search'  style={{ color: tintColor }} /> ,
        },
      },

      Notifications: {screen: NotificationsStack,
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => <Icon ios='ios-notifications' android='md-notifications'  style={{ color: tintColor }} /> ,
        },
      },
      
      Messages: {screen: MessagesStack,
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => <Icon name='mail'  style={{ color: tintColor }} /> ,
        },
      },
      
    },
      
    {
    
      tabBarPosition: 'top',

      animationEnabled: true,

      tabBarOptions: {

      activeTintColor: 'blue',

      inactiveTintColor: 'grey',

      style: { backgroundColor: '#fff'},

      activeBackgroundColor: "#fff",

      inactiveBackgroundColor: "#fff",

      showIcon: true,

      showLabel: false,
    
    },
  }
);

const MainScreenTab = StackNavigator({
  Home: { screen: HomeScreenTab},
});

const HomeScreenRouter = DrawerNavigator(

  {
    
    Home: { screen: MainScreenTab },
    
    Search : { screen: SearchScreen},
    
    Notifications: { screen: Notifications },
    
    Messages: { screen: Messages },
  
    Profile: { screen: ProfileScreen},
    
    Lists: { screen: ListScreen },
    
    Moments: { screen: MomentsScreen },
    
    Highlights: { screen: HighLightScreen },
  },

  {

    contentComponent: props => <SideBar {...props} />

  }

);

export default HomeScreenRouter;