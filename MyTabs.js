/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

/*import React, { Component } from 'react';

import { Container, Header, Title, Subtitle, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class AnatomyExample extends Component {

  render() {

    return (

      <Container>

        <Header>

          <Left>

            <Button transparent>

              <Icon name='analytics' />

            </Button>

          </Left>

          <Body>

            <Title>Shahid K Muhammed
              <Subtitle>@shahid_k</Subtitle>
              <Subtitle>690 Following 650 Followers</Subtitle>
            </Title>

          </Body>

          <Right />

        </Header>

        <Content>

          <Text>

            This is Content Section

          </Text>

        </Content>

        <Footer>

          <FooterTab>

            <Button full>

              <Text>Footer</Text>

            </Button>

          </FooterTab>

        </Footer>

      </Container>

    );

  }

}
*/

import React, { Component } from 'react';


import { TabNavigator } from 'react-navigation';


import  HomeScreen from './src/Screens/HomeScreen/HomeScreen.js';

//import MainScreenNavigator from './src/ChatScreen/index.js';

import ProfileScreen from './src/Screens/ProfileScreen/Profile.js';

import ListScreen from './src/Screens/ListScreen/ListScreen.js';

export const Tabs = TabNavigator ({
  Home: {
    Screen: HomeScreen,
  },

  Chat: {
    Screen: ProfileScreen,
  },

  Notification: { 
    Screen: ListScreen,
  },

  Mail: {
    Screen: ListScreen,
  },
})
  


/*const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'home' : 'home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'person' : 'person-outline'}
          size={26}
          style={{ color: tintColor }}


                  <Left>

                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>

            <Icon name="menu" />

            </Button>

          </Left>

          <Body>

            <Title>Home</Title>

          </Body>

          <Avatar
              small
              rounded
              icon={{name: "user"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
            />
        />
      ),
    },
  },
});*/