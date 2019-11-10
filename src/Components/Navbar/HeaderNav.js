import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

// import Logo from '../../Assets/brand/icon-front-white.png';

class myHeader extends Component {
  state = {};
  render() {
    return (
      <View>
        <Header
          style={{backgroundColor: '#fb724a', height: 55}}
          androidStatusBarColor="#fb724a"
          noShadow>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>ToDo List</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}

export default myHeader;

const styles = StyleSheet.create({
  cover: {
    // padding: 10,
    alignItems: 'center',
  },
  image: {
    marginTop: 15,
    width: 190,
    height: 70,
    marginLeft: 20,
    resizeMode: 'contain',
  },
});
