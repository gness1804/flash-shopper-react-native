import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

import Main from './main';
import styles from './styles/index-styles'

export default class FlashShopper extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      storedItems: [],
    }
  }

  componentWillMount = () => {
    AsyncStorage.getItem('items')
      .then((items) => {
        const parsedItems = JSON.parse(items)
        if (!Array.isArray(parsedItems)) {
          AsyncStorage.setItem('items', JSON.stringify([]))
          return
        }
        this.setState({ storedItems: parsedItems })
      })
      .then(() => {this.setState({ items: this.state.storedItems })})
      .catch((err) => { throw new Error(err) })
  }

  addNewItem(newItem){
    this.setState({ items: [
      ...this.state.items,
      newItem
    ] });
    AsyncStorage.setItem('items', JSON.stringify([
      ...this.state.storedItems,
      newItem
    ]))
  }

  deleteAllItems(){
    this.setState({ items: [] });
  }

  deleteItem = (id) => {
    let newArr = this.state.items.filter((item) => {
        return item.id !== id;
      })
      console.log('newArr', newArr)
      AsyncStorage.setItem('items', JSON.stringify([
        newArr
      ]))
      .then(() => {this.setState({ storedItems: newArr })}).then(() => {this.setState({ items: this.state.storedItems })})

  }

  sortByAisle(){
    let newArr = this.state.items.sort((a, b) => {return a.aisle - b.aisle });
    this.setState({ items: newArr });
  }

  render() {

    const { items } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Flash Shopper
        </Text>
        <Text>{items.length ? <Text>You have {items.length} items on your list.</Text> : <Text>There are no items on your list!</Text>}</Text>
        <Main
          addNewItem={this.addNewItem.bind(this)}
          items={items}
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
