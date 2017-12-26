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