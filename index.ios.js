import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './main';
import { sortBy } from 'lodash';

export default class FlashShopper extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
    }
  }

  addNewItem(newItem){
    this.state.items.push(newItem);
  }

  deleteItem = (id) => {
    let newArr = this.state.items.filter((item) => {
        return item.id !== id;
      })
      this.setState({ items: newArr });
  }

  sortByAisle(){
    let newArr = this.state.items.sort((a, b) => {return a.aisle - b.aisle });
    this.setState({ items: newArr });
  }

  render() {

    let output;

    if (this.state.items.length > 1) {
      console.log('more than 1');
    }

    return (
      <View style={styles.container}>
        <Text>
          Flash Shopper
        </Text>
        <Main
          addNewItem={this.addNewItem.bind(this)}
          items={this.state.items}
          deleteItem={this.deleteItem}
          sortByAisle={this.sortByAisle.bind(this)}
          >
        </Main>
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
