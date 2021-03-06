import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(134, 148, 247)',
  },
  text: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 40,
    marginBottom: 30,
    marginTop: 30,
  },
});

AppRegistry.registerComponent('FlashShopper', () => FlashShopper);
