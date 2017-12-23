import React from "react";

import { Container, Content, Card, CardItem, Text, Left, Body, Right, List, ListItem, Icon, View, Thumbnail, Footer } from "native-base";

const routes = [{name: "Profile",icon: 'person'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'flash'}, {name: "Highlights",icon:'albums'} ];

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

            <CardItem>
              <List

                dataArray={routes}

                renderRow={data => {

                  return (

                    <ListItem

                      onPress={() => this.props.navigation.navigate(data.name)}

                    >

                    <Left>

                      <Icon name={data.icon}/>

                    </Left>

                    <Body>

                      <Text>{data.name}</Text>

                    </Body>

                    </ListItem>

                  );

                }}

              />

            </CardItem>

            <CardItem bordered>

              <List>

                <ListItem>

                  <Text>Settings and Privacy</Text>               

                </ListItem>

                <ListItem>

                  <Text>Help Center</Text>               

                </ListItem>

              </List>

            </CardItem>

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