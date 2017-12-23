import React from "react";

import { AppRegistry, Image, StatusBar } from "react-native";

import { Container, Content, Text, List, ListItem } from "native-base";

import { Icon } from 'react-native-elements';

const routes = ["Home", "Chat", "Profile"];

export default class SideBar extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon
      
            name="home"
      
            size={30}
      
            iconStyle={{
      
              width: 50,
      
              height: 50,
      
              alignItems: 'center',
      
              justifyContent: 'center',
      
            }}
      
            type="material-community"
      
            color={tintColor}
      
          />
    ),
  };
  
  render() {

    return (

      <Container>

        <Content>

          <List

            dataArray={routes}

            renderRow={data => {

              return (

                <ListItem

                  button

                  onPress={() => this.props.navigation.navigate(data)}>

                  <Text>{data}</Text>

                </ListItem>

              );

            }}

          />

        </Content>

      </Container>

    );

  }

}