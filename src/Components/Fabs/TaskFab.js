import React, {Component} from 'react';
import {View, Button, Icon, Fab} from 'native-base';
export default class mainFab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => this.setState({active: !this.state.active})}>
        <Icon type="Ionicons" name="md-send" />
        {/* <Button style={{backgroundColor: '#34A34F'}}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{backgroundColor: '#3B5998'}}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{backgroundColor: '#DD5144'}}>
            <Icon name="mail" />
          </Button> */}
      </Fab>
    );
  }
}
