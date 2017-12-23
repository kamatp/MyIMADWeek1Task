import React, { Component } from "react";

import HomeScreen from "./HomeScreen.js";

import ProfileScreen from "../ProfileScreen/Profile.js";

import ListScreen from '../ListScreen/ListScreen.js';

import MomentsScreen from '../MomentsScreen/MomentsScreen.js';

import HighLightScreen from '../HighLightScreen/HighLightScreen.js';

import Notifications from './Notifications';

import Messages from './Messages'; 

import SearchScreen from './SearchScreen.js';



import SideBar from "../SideBar/SideBar.js";

import {TabNavigator, DrawerNavigator } from "react-navigation";



const HomeScreenTab = TabNavigator({
  
    Home: {screen: HomeScreen},
  
    Search: { screen: SearchScreen},
  
    Notifications: {screen: Notifications}, 
  
    Messages: {screen: Messages},
  
},
    
   {
  
      animationEnabled: true,
  
      tabBarOptions: {
  
      activeTintColor: 'blue',
  
      inactiveTintColor: 'grey',

      style: { backgroundColor: 'white'},
  
      activeBackgroundColor: "#fff",
  
      inactiveBackgroundColor: "#fff",
  
      showIcon: true,
  
      showLabel: false,
  
      },
    }
  );


const HomeScreenRouter = DrawerNavigator(

  {
    
    Home: { screen: HomeScreenTab },
    
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