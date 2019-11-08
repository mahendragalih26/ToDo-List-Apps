import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    console.log('called');
    return (
      <View>
        {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
