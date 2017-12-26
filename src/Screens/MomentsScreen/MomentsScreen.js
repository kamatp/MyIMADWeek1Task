import React, { Component } from 'react';

import { Container, Content, Icon, Text} from 'native-base';

class MomentsScreen extends Component  {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (

        <Icon name="flash" style={{color: tintColor}} />

        ),

    }
  
    render() {

        return (

            <Container>
                <Content>
                    <Text> This is a dummy Moments page </Text>
                </Content>

            </Container>
        );
    }
}

export default MomentsScreen;