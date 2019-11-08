import React, {Component} from 'react';

import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import {Button, Icon, Fab} from 'native-base';

export default class mainFab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    console.log('data dari fab = ', this.props);
    return (
      <View style={{flex: 1}}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={() => this.setState({active: true})}>
          <Icon type="AntDesign" name="plus" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
