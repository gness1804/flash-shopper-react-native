import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './main';

export default class FlashShopper extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
    }
  }

  addNewItem(newItem){
    this.state.items.push(newItem);
    console.log('new state on click', this.state.items);
  }

  render() {

    console.log('state', this.state.items);

    let output;

    if (this.state.items.length > 1) {
      console.log('more than 1');
    }

    return (
      <View style={styles.container}>
        <Text>
          Flash Shopper
        </Text>
        <Main addNewItem={this.addNewItem.bind(this)}></Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('FlashShopper', () => FlashShopper);
