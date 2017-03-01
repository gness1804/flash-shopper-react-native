import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Main from './main';
import styles from './styles/index-styles'

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

  deleteAllItems(){
    this.setState({ items: [] });
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

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Flash Shopper
        </Text>
        <Main
          addNewItem={this.addNewItem.bind(this)}
          items={this.state.items}
          deleteItem={this.deleteItem}
          sortByAisle={this.sortByAisle.bind(this)}
          deleteAllItems={this.deleteAllItems.bind(this)}
          >
        </Main>
      </View>
    );
  }
}

AppRegistry.registerComponent('FlashShopper', () => FlashShopper);
