import React from "react";

import { Container, Fab, Header, Title, Thumbnail, Left, Icon, Right, Button, Body, Content, Footer, FooterTab, Text, Card, CardItem } from "native-base";

import  { TwitterContents }  from '../TwitterContents.js';

export default class HomeScreen extends React.Component {
  
 static navigationOptions = {
    
    tabBarIcon: ({ tintColor }) => (
    
    <Icon name="home" style={{color: tintColor}} />
    
    ), 

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

    const { navigate } = this.props.navigation;

    return (

      <Container>

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