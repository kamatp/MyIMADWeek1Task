import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';
import { Header, Title, Left, Icon, Input, Item, Right, Thumbnail, Button, Body} from "native-base";
export default class NotificationsHeader extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Header style={{backgroundColor:'white'}}>
  <Left>
      
  <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" style={{color: 'blue'}} />
      </Button>
  </Left>
  <Body>
      <Item style={{width: 200}}>
          <Input placeholder="Notifications" />
      </Item>
  </Body>
  <Right />
</Header>

      );
    }
  }


