import React from "react";

import { Container, Content, Card, CardItem, Text, Left, Body, Right, List, ListItem, Icon, View, Thumbnail, Footer } from "native-base";

import ProfileScreen from "../ProfileScreen/Profile.js";

import ListScreen from '../ListScreen/ListScreen.js';

import MomentsScreen from '../MomentsScreen/MomentsScreen.js';

import HighLightScreen from '../HighLightScreen/HighLightScreen.js';

let userdetails='';

export default class SideBar extends React.Component {
 
  constructor() {
    
    super();
      
    userdetails = {
    
      username: 'Pallavi Kamat',
    
      userid: '@pallavi_kamat',
    
      following: 690,
    
      followers: 653,
    
      thumbnail: '../../Images/tomjerry.jpg',
    
    };
    
  }
  
  render() {

    const {username, userid,thumbnail,following,followers} = userdetails;
    
    return (

      <Container>

        <Content>
          <Card transparent>

            <CardItem>
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
                
                <Thumbnail source={require('../../Images/tomjerry.jpg')} />
                <Text style={{fontWeight: 'bold'}}>{username}</Text>
                <Text note>{userid}</Text>
                         
                <View style = {{flexDirection: 'row'}} >
                  <Text>{following} Following </Text>
                  <Text >{followers} Followers</Text>
                </View>
              </View>
            </CardItem>

            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}
            />

            <CardItem button onPress={() => this.props.navigation.navigate("Profile")}>
              <Icon name="person" />
              <Text style = {{color:"black"}}>Profile</Text>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("Lists")}>
              <Icon name="list-box" />
              <Text style = {{color:"black"}}>Lists</Text>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("Moments")}>
              <Icon name="flash" />
              <Text style = {{color:"black"}}>Moments</Text>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("HighLights")}>
              <Icon name="albums" />
              <Text style = {{color:"black"}}>Highlights{"\n"}</Text>
            </CardItem>

            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}
            />

            <CardItem>
              <Text>Settings and Privacy</Text>               
            </CardItem>

            <CardItem>
              <Text>Help Center</Text>               
            </CardItem>

            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}
            />

          </Card>

        </Content>

        <Footer >

          <Left>
            <Icon style={{ marginLeft: 15 }} name='moon'></Icon>
          </Left>

          <Right>
          <Icon style={{ marginRight: 15 }} name='grid'></Icon>
          </Right>

        </Footer>

      </Container>

    );

  }

}