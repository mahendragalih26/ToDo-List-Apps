import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Container, Tab, Tabs, TabHeading} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';

import Header from '../../Components/Navbar/HeaderNav';
import Fab from '../../Components/Fabs/MainFab';
import Task from '../AppScreens/Task';
import Modal from '../../Components/Modals/NewTask';

class myHome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  <Task navigation={this.props.navigation} />
                  <Modal navigation={this.props.navigation} />
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
        <Fab navigation={this.props.navigation} />
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
