import React from "react";

import { AppRegistry, Alert } from "react-native";

import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";

export default class ProfileScreen extends React.Component {

  render() {

    return (

      <Container>

        <Content padder>

          <Card>

            <CardItem>

              <Icon active name="paper-plane" />

              <Text>Show User profiles here</Text>

              <Right>

                <Icon name="close" />

              </Right>

            </CardItem>

          </Card>

        </Content>

      </Container>

    );

  }

}

ProfileScreen.navigationOptions = ({ navigation }) => ({

  header: (

    <Header>

      <Left>

        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>

          <Icon name="menu" />

        </Button>

      </Left>

      <Body>

        <Title>Profile</Title>

      </Body>

      <Right />

    </Header>

  )

});