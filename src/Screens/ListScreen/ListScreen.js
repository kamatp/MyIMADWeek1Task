import React, { Component } from 'react';

import { Container, Content, Icon, Text} from 'native-base';

class ListScreen extends Component  {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

        <Icon name="list-box" style={{color: tintColor}} />

        ),

    }
  
    render() {

        return (

            <Container>
                <Content>
                    <Text> This is a dummy List page </Text>
                </Content>

            </Container>
        );
    }
}

export default ListScreen;