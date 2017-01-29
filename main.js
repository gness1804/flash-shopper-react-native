import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
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
  }

  render() {

  const { name, aisle, note, quantity, id } = this.state;
    return (
      <View style={styles.mainView}>
      <TextInput
        id="item-input"
        value={this.state.name}
        style={styles.inputField}
        placeholder="Item Name"
        onChangeText={(name) => this.setState({name})}
      />
      <TextInput
        id="aisle-input"
        value={this.state.aisle}
        style={styles.inputField}
        placeholder="Aisle Name"
        onChangeText={(aisle) => this.setState({aisle})}
      />
      <TextInput
        id="note-input"
        value={this.state.note}
        style={styles.inputField}
        placeholder="Note"
        onChangeText={(note) => this.setState({note})}
      />
      <TextInput
        id="quantity-input"
        value={this.state.quantity}
        style={styles.inputField}
        placeholder="Quantity"
        onChangeText={(quantity) => this.setState({quantity})}
      />
      <Button
        title="Submit"
        onPress={(name, aisle, note, quantity) => { this.createItem(name, aisle, note, quantity) }}
      />
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
  }
})

export default Main;
