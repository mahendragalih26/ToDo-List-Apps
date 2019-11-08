import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import Fab from '../Fabs/MainFab';

export default class ModalTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: this.props.status,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Button
        onPress={() => this.setState({isModalVisible: false})}
        title="Close"
      />
    </View>
  );

  render() {
    console.log('dari modal = ', this.props);
    return (
      <View style={{flex: 1}}>
        {/* <Button onPress={this.toggleModal} title="Fancy!" /> */}
        <Fab setModal={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}>
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
