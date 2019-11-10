import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Container, Tab, Tabs, TabHeading} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';

import Header from '../../Components/Navbar/HeaderNav';
import Fab from '../../Components/Fabs/MainFab';
import Task from '../AppScreens/Task';
import Modal from '../../Components/Modals/NewTask';
import {db} from '../../Configs/firebase';

class myHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      tempTask: [],
      indexTask: [],
      isLoading: true,
      isModalVisible: false,
      isModalEditVisible: false,
    };
  }

  toggleModal = (tempTask, index) => {
    console.log('my temp aa = ', tempTask);
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      tempTask: tempTask,
      indexTask: index,
    });
  };

  componentDidMount = () => {
    db.ref('tasks/').on('value', result => {
      let data = result.val();
      if (data !== null) {
        console.log('data = ', data);
        let task = Object.values(data);
        task.map((item, index) => {
          this.setState({
            task: Object.values(item),
            isLoading: false,
          });
        });
      }
    });
  };

  render() {
    console.log('my task = ', this.state);
    console.log('my status = ', this.state.isLoading);
    return (
      <SafeAreaView style={styles.container}>
        <Grid>
          <Header />
          <Row
            size={10}
            style={{
              backgroundColor: '#fb724a',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}></Row>
          <Row size={90}>
            <Container>
              <Tabs
                tabContainerStyle={{
                  elevation: 0,
                }}
                tabBarUnderlineStyle={{backgroundColor: '#fb724a'}}>
                <Tab
                  heading="TODO"
                  tabStyle={{backgroundColor: 'white'}}
                  activeTabStyle={{backgroundColor: 'white'}}
                  textStyle={{color: 'gray'}}
                  activeTextStyle={{color: 'gray', fontWeight: 'bold'}}>
                  {this.state.isLoading === true ? (
                    <Text>loading..</Text>
                  ) : (
                    <>
                      <Task
                        navigation={this.props.navigation}
                        taskData={this.state.task}
                        toggleModal={this.toggleModal}
                      />
                    </>
                  )}
                </Tab>
                <Tab
                  heading="DONE"
                  tabStyle={{backgroundColor: 'white'}}
                  activeTabStyle={{backgroundColor: 'white'}}
                  textStyle={{color: 'gray'}}
                  activeTextStyle={{color: 'gray', fontWeight: 'bold'}}></Tab>
              </Tabs>
            </Container>
          </Row>
        </Grid>
        <Modal
          toggleModal={() => this.toggleModal()}
          isModalVisible={this.state.isModalVisible}
          dataEdit={this.state.tempTask}
        />
        {/* <Fab navigation={this.props.navigation}/> */}
      </SafeAreaView>
    );
  }
}

export default myHome;

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
