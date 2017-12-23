import React from "react";

import { Container, Fab, Header, Title, Thumbnail, Left, Icon, Right, Button, Body, Content, Footer, FooterTab, Text, Card, CardItem } from "native-base";

import  { TwitterContents }  from '../TwitterContents.js';

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    
    tabBarIcon: ({ tintColor }) => (
    
    <Icon name="home" style={{color: tintColor}} />
    
    ), 

    tabBarPosition: 'top',

    headerStyle: {
      backgroundColor: 'white'
    },

  }
    
  constructor() {
    
    super();
    
    this.state = {
    
      active: true,
    
    };
  }

  render() {
  
    const { navigation } = this.props;

    return (

      <Container>

        <Header>

        <Left>
    
                <Button
    
                  transparent
    
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
    
                  <Thumbnail source={require('../../Images/tomjerry.jpg')} />
    
                </Button>
    
              </Left>
    
              <Body>
    
                <Title>Home</Title>
    
              </Body>
    
              <Right />
    
            </Header>

        <Content>

          <TwitterContents />

          <TwitterContents />

          <TwitterContents/>

        </Content>

        <Fab

          active={this.state.active}

          style={{ backgroundColor: 'blue', marginBottom: 30 }}

          onPress={() => this.setState({ active:!this.state.active })}>

          <Icon name="refresh" />

        </Fab>

        <Fab

          active={this.state.active}

          style={{ backgroundColor: 'blue', marginBottom: 30 }}

          position="bottomRight"

          onPress={() => this.setState({ active:!this.state.active })}>

          <Icon name="send" />

        </Fab>

        <Footer>

          <FooterTab>

            <Button active>
              <Text>All</Text>
            </Button>
                    
            <Button>
              <Text>Mentions</Text>
            </Button>

            <Right>
              <Button active>
                <Icon active name='settings' />
              </Button>
            </Right>

          </FooterTab>

        </Footer>
        
      </Container>

    );

  }

}