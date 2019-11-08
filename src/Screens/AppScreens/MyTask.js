import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';

import Header from '../../Components/Navbar/HeaderNav';
import TaskBoard from '../../Components/Task/TaskBoard';
import Fab from '../../Components/Fabs/TaskFab';

import data from '../../Data/task.json';

class myTask extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //   addTask(userId, name, email, imageUrl) {
  //     firebase.database().ref('users/' + userId).set({
  //       username: name,
  //       email: email,
  //       profile_picture : imageUrl
  //     });
  //   }

  render() {
    console.log('json = ', data);
    return (
      <SafeAreaView style={styles.container}>
        <Grid>
          <Header />
          <Row
            size={5}
            style={{
              backgroundColor: '#fb724a',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}></Row>
          <Row size={80}>
            <TaskBoard />
          </Row>
        </Grid>
        <Fab />
      </SafeAreaView>
    );
  }
}

export default myTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    // padding: 10,
    marginVertical: 3,
    marginHorizontal: 16,
  },
});
