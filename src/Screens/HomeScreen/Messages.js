import React, { Component } from 'react';

import { Container, Content, Icon, Text} from 'native-base';


class Messages extends Component  {

   static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

        <Icon name="mail" style={{color: tintColor}} />

        ),

    }
  
    render() {

        return (

            <Container>
                <Content>
                    <Text> This is a dummy Messages page </Text>
                </Content>

            </Container>
        );
    }
}

export default Messages;