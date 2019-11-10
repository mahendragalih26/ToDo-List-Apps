import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card, CardItem, Body, Icon} from 'native-base';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    time: '2 Days 10 Hours',
    color: 'red',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    time: '2 Days 10 Hours',
    color: 'red',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    time: '2 Days 2 Hours',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bv',
    title: 'First Item',
    time: ' 10 Hours',
    color: 'red',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6r',
    title: 'Second Item',
    time: '2 Days',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d711',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
    title: 'First Item',
    time: '2 Days 10 Hours',
    color: 'red',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd1aa97f63',
    title: 'Second Item',
    time: '2 Days',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2972',
    title: 'Third Item last',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [],
    };
  }

  // handleTask = data => {
  //   this.props.toggleModal(data);
  // };

  render() {
    let {taskData} = this.props;
    console.log('my task from state = ', taskData);
    console.log('my props in task = ', this.props);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={taskData}
          renderItem={({item, index}) => (
            <Fragment>
              <ScrollView>
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => this.props.toggleModal(item, index)}>
                  <View style={styles.item}>
                    <Card style={styles.content}>
                      <CardItem style={styles.card}>
                        <Body>
                          <Text style={{fontSize: 15, paddingVertical: 3}}>
                            {item.task}
                          </Text>
                        </Body>
                      </CardItem>
                      <CardItem style={styles.card} footer bordered>
                        <View style={{width: '60%'}}>
                          {item.color !== undefined ? (
                            <>
                              <Text
                                style={{
                                  width: 130,
                                  backgroundColor: item.color,
                                  height: 13,
                                }}></Text>
                            </>
                          ) : null}
                        </View>
                        {item.chosenDate !== undefined ? (
                          <>
                            <View style={{width: '5%'}}>
                              <Icon
                                style={{
                                  fontSize: 11,
                                  alignItems: 'flex-end',
                                }}
                                type="FontAwesome"
                                name="clock-o"
                              />
                            </View>
                            <View
                              style={{
                                width: '40%',
                              }}>
                              <Text
                                style={{
                                  fontSize: 11,
                                }}>
                                &nbsp;{' '}
                                {item.chosenDate.toString().substr(16, 8)}
                              </Text>
                            </View>
                          </>
                        ) : null}
                      </CardItem>
                    </Card>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </Fragment>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default TaskList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 5,
    backgroundColor: '#ededed',
    height: '85%',
  },
  item: {
    // backgroundColor: 'red',
    // height: 70,
    // paddingHorizontal: 5,
    // borderWidth: 1,
    // borderColor: '#b3b3b3',
    // marginVertical: 3,
    marginHorizontal: 10,
  },
  content: {
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
});
