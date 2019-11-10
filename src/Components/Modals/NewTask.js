import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet, Text, Picker} from 'react-native';
import {DatePicker, Item, Grid} from 'native-base';
import {db} from '../../Configs/firebase';
import AsyncStorage from '@react-native-community/async-storage';

import Modal from 'react-native-modal';

import Fab from '../Fabs/MainFab';

export default class ModalTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      color: 0,
      task: '',
    };
  }

  // toggleModal = () => {
  //   this.setState({isModalVisible: !this.state.isModalVisible});
  // };

  setDate = newDate => {
    this.setState({chosenDate: newDate});
  };

  onSubmit = () => {
    db.ref(
      'tasks/' +
        new Date().toString().substr(0, 15) +
        '/' +
        new Date().toString().substr(16, 8),
    )
      .set(
        {
          task: this.state.task,
          chosenDate: this.state.chosenDate.toString(),
          color: this.state.color,
        },
        function(error) {
          if (error) {
            // The write failed...
            console.log('Error = ', error);
          }
        },
      )
      .then(this.toggleModal());
  };

  componentDidMount = () => {
    this.setState({
      chosenDate: new Date(),
    });
  };

  renderModalContent = data =>
    data === undefined ? (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>Kegiatan Anda</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.setState({task: text})}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Kapan</Text>
          <DatePicker
            defaultDate={new Date()}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: 'green'}}
            onDateChange={this.setDate}
            disabled={false}
          />
          {/* <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text> */}
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Status</Text>
          <Picker
            selectedValue={this.state.color}
            style={styles.picker}
            itemStyle={{color: 'red'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({color: itemValue})
            }>
            {status.map((item, index) => (
              // <Picker.Item key={index} label={item.status} value={item.id} />
              <Item
                key={index}
                label={item.status}
                value={item.color}
                color={item.color}
              />
            ))}
          </Picker>
        </View>
        <View style={{padding: 15, flexDirection: 'row', width: '100%'}}>
          <View style={{width: '50%', paddingHorizontal: 5}}>
            <Button
              color="#eb0c2d"
              onPress={this.props.toggleModal}
              title="Close"
            />
          </View>
          <View style={{width: '50%', paddingHorizontal: 5}}>
            <Button onPress={() => this.onSubmit()} title="Create" />
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>Kegiatan Anda</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.setState({task: text})}
            value={data.task}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Kapan</Text>
          <DatePicker
            defaultDate={new Date()}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: 'green'}}
            onDateChange={this.setDate}
            disabled={false}
          />
          {/* <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text> */}
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Status</Text>
          <Picker
            selectedValue={this.state.color}
            style={styles.picker}
            itemStyle={{color: 'red'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({color: itemValue})
            }>
            {status.map((item, index) => (
              // <Picker.Item key={index} label={item.status} value={item.id} />
              <Item
                key={index}
                label={item.status}
                value={item.color}
                color={item.color}
              />
            ))}
          </Picker>
        </View>
        <View style={{padding: 15, flexDirection: 'row', width: '100%'}}>
          <View style={{width: '100%', paddingHorizontal: 5}}>
            <Button
              color="#28c425"
              onPress={this.props.toggleModal}
              title="Done"
            />
          </View>
        </View>
        <View style={{padding: 15, flexDirection: 'row', width: '100%'}}>
          <View style={{width: '50%', paddingHorizontal: 5}}>
            <Button
              color="#eb0c2d"
              onPress={this.props.toggleModal}
              title="Close"
            />
          </View>
          <View style={{width: '50%', paddingHorizontal: 5}}>
            <Button onPress={() => this.onSubmit()} title="Update" />
          </View>
        </View>
      </View>
    );

  render() {
    console.log('dari modal = ', this.props);
    console.log('dari modal 2 = ', this.state);
    return (
      <View style={{flex: 1}}>
        <Fab setModal={this.props.toggleModal} />
        <Modal
          isVisible={this.props.isModalVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}>
          {this.renderModalContent(this.props.dataEdit)}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    padding: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
  },
  picker: {
    width: '100%',
  },
});

const status = [
  {
    id: '1',
    status: 'Any',
    color: '#28c425',
  },
  {
    id: '2',
    status: 'Receipt',
    color: '#eb4034',
  },
  {
    id: '3',
    status: 'work',
    color: '#2780e6',
  },
  {
    id: '4',
    status: 'choise2',
    color: '#27e6dc',
  },
  {
    id: '5',
    status: 'choise3',
    color: '#c627e6',
  },
];
