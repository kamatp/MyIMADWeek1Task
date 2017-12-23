import React, { Component } from "react";
import Tabs from './'

export default class TabsAdvancedExample extends Component {
    
      render() {
    
        return (
    
          <Container>
    
            <Header>
    
              <Left>
    
                <Button
    
                  transparent
    
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
    
                  <Icon name="user" />
    
                </Button>
    
              </Left>
    
              <Body>
    
                <Title>Home</Title>
    
              </Body>
    
              <Right />
    
            </Header>
    
    
            <Tabs />
    
            <Content>
              <Text>
                This is content Section
              </Text>
    
            </Content>
    
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