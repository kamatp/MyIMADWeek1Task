import React, { Component } from 'react';

import {Keyboard } from 'react-native';

import { Container, Content, Left, Right, Body, Footer, FooterTab, View, Header,Item,Icon,Input,Button, Text} from 'native-base';

export default class SearchScreen extends Component  {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

        <Icon name="search" style={{color: tintColor}} />

        ),

    }
  
    render() {

        return (

            <Container>
                <Header style={{backgroundColor:'white'}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: 'blue'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Item style={{width: 200}}>
                            <Input placeholder="Search Twitter" />
                        </Item>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
            
                   
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