import React, { Component } from 'react';

import {StyleSheet, Image} from 'react-native';

import { Container, Content, View, Header,Item,Icon,Input,Button, Text} from 'native-base';


// Dummy

class HighLightScreen extends Component  {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

        <Icon name="list" style={{color: tintColor}} />

        ),

    }
  
    render() {

        return (

            <Container>
                <Content>
                    <Text> This is a dummy Highlights page </Text>
                </Content>

            </Container>
        );
    }
}

export default HighLightScreen;