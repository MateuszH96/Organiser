import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default class NumberSelection extends Component {
  constructor() {
    super();

    this.state = {
      selectedNumber1: 1,
      selectedNumber2: 2,
      generatedNumbers: [],
    };

    this.generateNumbers = this.generateNumbers.bind(this);
  }

  generateNumbers(){
    let min = 1;
    let max = this.state.selectedNumber2;
    let generated = [];

    for (let i = 0; i < this.state.selectedNumber1; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      generated.push(randomNumber);
    }

    this.setState({ generatedNumbers: generated });
  }

  renderNumberItem = ({ item }) => <Text>{item}</Text>;

  render() {
    const numberList1 = Array.from({ length: 10 }, (_, index) => index + 1);
    const numberList2 = [2, 4, 6, 8, 10, 12, 20, 100];

    return (
      <View style={styles.container}>
        <View>
        <Text>Wybierz ilość kości</Text>
        <Picker
          selectedValue={this.state.selectedNumber1}
          onValueChange={(itemValue) =>
            this.setState({ selectedNumber1: itemValue })
          }
        >
          {numberList1.map((number) => (
            <Picker.Item key={number} label={number.toString()} value={number} />
          ))}
        </Picker>

        <Text>Wybierz rodzaj kości</Text>
        <Picker
          selectedValue={this.state.selectedNumber2}
          onValueChange={(itemValue) =>
            this.setState({ selectedNumber2: itemValue })
          }
        >
          {numberList2.map((number) => (
            <Picker.Item key={number} label={'d'+number.toString()} value={number} />
          ))}
        </Picker>
        <Button title="Losuj" onPress={this.generateNumbers} />

        <Text>Wylosowane liczby:</Text>
        </View>
        <View style={styles.container}>
        <FlatList
          data={this.state.generatedNumbers}
          renderItem={({item})=>(
            <View style={styles.resultContainer}>
                <Text style={styles.resultTxt}>{item}</Text>
            </View>
          )}
        />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    resultContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultTxt:{
        flex: 1,
        fontSize: 120,
        fontWeight: 'bold',
    },
    
});