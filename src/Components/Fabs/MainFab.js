import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import {Button, Text, Icon, Fab} from 'native-base';

export default class mainFab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('data dari fab = ', this.props);
    return (
      <View style={{flex: 1}}>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={this.props.setModal}>
          <Icon type="AntDesign" name="plus" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
