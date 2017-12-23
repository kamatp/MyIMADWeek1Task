import React, { Component } from 'react';

import { Container, Content, Icon, Text} from 'native-base';


// Dummy

export default class Notifications extends Component  {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

            <Icon ios='ios-notifications' android='md-notifications' style={{color: tintColor}} />

        ),

    }
  
    render() {

        return (

            <Container>

                <Content>
                    <Text> This is a dummy Notifications page </Text>
                </Content>

            </Container>
        );
    }
}