import React, { Component } from 'react';

import {StyleSheet, Image} from 'react-native';

import { Container, Content, View, Header,Item,Icon,Input,Button, Text} from 'native-base';

class HighLightScreen extends Component  {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

        <Icon name="albums" style={{color: tintColor}} />

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