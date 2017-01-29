import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      aisle: null,
      note: '',
      quantity: null,
      id: null,
    }
  }

  createItem(){
    const newItem = {
      name: this.state.name,
      aisle: this.state.aisle,
      note: this.state.note,
      quantity: this.state.quantity,
      id: Date.now(),
    };
  this.props.addNewItem(newItem);
  this.setState(this.state)
  this.setState({ name: '' })
  this.clearText('itemInput', 'aisleInput', 'noteInput', 'quantityInput');
  }

  clearText(itemInput, aisleInput, noteInput, quantityInput){
    this.refs[itemInput].setNativeProps({text: ''});
    this.refs[aisleInput].setNativeProps({text: ''});
    this.refs[noteInput].setNativeProps({text: ''});
    this.refs[quantityInput].setNativeProps({text: ''});
  }

  deleteAllItems(){
    this.props.deleteAllItems();
  }

  deleteItem(id){
    this.props.deleteItem(id);
  }

  sortByAisle(){
    this.props.sortByAisle();
  }

  sortAlpha(){
    this.props.sortAlpha();
  }

  render() {

  const { name, aisle, note, quantity, id } = this.state;
  const { items } = this.props;

  let itemsDisplay;

  if (items.length > 0) {
    itemsDisplay = items.map((item) => {
      return <View id="items-master-container" key={item.id}>
      <Text>Item: {item.name}</Text>
      <Text>Aisle: {item.aisle}</Text>
      <Text>Note: {item.note}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Button
        title="Delete Item"
        onPress={() => { this.deleteItem(item.id) }}
      />
      <Button
        title="Sort by Aisle"
        onPress={() => { this.sortByAisle() }}
      />
      </View>
    })
  }

    return (
      <View style={styles.mainView}>
      <TextInput
        id="item-input"
        value={this.state.name}
        style={styles.inputField}
        ref={'itemInput'}
        placeholder="Item Name"
        onChangeText={(name) => this.setState({name})}
      />
      <TextInput
        id="aisle-input"
        value={this.state.aisle}
        style={styles.inputField}
        ref={'aisleInput'}
        placeholder="Aisle Name"
        onChangeText={(aisle) => this.setState({aisle})}
      />
      <TextInput
        id="note-input"
        value={this.state.note}
        style={styles.inputField}
        ref={'noteInput'}
        placeholder="Note"
        onChangeText={(note) => this.setState({note})}
      />
      <TextInput
        id="quantity-input"
        value={this.state.quantity}
        style={styles.inputField}
        ref={'quantityInput'}
        placeholder="Quantity"
        onChangeText={(quantity) => this.setState({quantity})}
      />
      <Button
      title="Submit"
      style={styles.greenButtons}
      disabled={!this.state.name}
      onPress={(name, aisle, note, quantity) => { this.createItem(name, aisle, note, quantity) }}
      />
      <Button
        title="Delete ALL Items"
        onPress={() => { this.deleteAllItems() }}
        disabled={this.props.items.length === 0}
      />
      {itemsDisplay}
    </View>

    );
  }

}

const styles = StyleSheet.create({
  mainView: {

  },
  inputField: {
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    margin: 15,
    padding: 10,
    width: 250,
  },
  greenButtons: {
    color: 'rgb(160, 236, 175);',
  },
})

export default Main;
