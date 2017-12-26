import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';
import { Header, Title, Left, Right, Thumbnail, Button, Body} from "native-base";
export default class HomeHeader extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Header transparent style={{backgroundColor:'white', elevation: 0}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Thumbnail small source={require('../Images/tomjerry.jpg')} />
            </Button>
          </Left>
          <Body>
           <Title style={{color: 'black'}}>Home</Title>
          </Body>
         <Right />
        </Header>

      );
    }
  }
