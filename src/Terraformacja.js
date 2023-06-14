import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

class Terraformacja extends Component {
  constructor() {
    super();

    const items = [
      { name: 'Megakredyty', value: 0, production: 1 },
      { name: 'Stal', value: 0, production: 1 },
      { name: 'Tytan', value: 0, production: 1 },
      { name: 'Roślinność', value: 0, production: 1 },
      { name: 'Energia', value: 0, production: 1 },
      { name: 'Ciepło', value: 0, production: 1 },
      { name: 'Punkty Zwycięstwa', value: 20 },
    ];

    this.state = {
      items,
      isButtonDisabled: false,
    };
  }

  handleDecreaseValue = (index) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      const currentValue = updatedItems[index].value || 0;
      updatedItems[index].value = currentValue - 1;
      return { items: updatedItems };
    });
  };

  handleIncreaseValue = (index) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      const currentValue = updatedItems[index].value || 0;
      updatedItems[index].value = currentValue + 1;
      return { items: updatedItems };
    });
  };

  handleDecreaseProduction = (index) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      const currentProduction = updatedItems[index].production || 0;
      updatedItems[index].production = currentProduction - 1;
      return { items: updatedItems };
    });
  };

  handleIncreaseProduction = (index) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      const currentProduction = updatedItems[index].production || 0;
      updatedItems[index].production = currentProduction + 1;
      return { items: updatedItems };
    });
  };

  handleProdukuj = () => {
    this.setState({ isButtonDisabled: true });

    setTimeout(() => {
      this.setState({ isButtonDisabled: false });
    }, 5000);

    this.setState((prevState) => {
      const updatedItems = [...prevState.items];

      for (let i = 0; i < updatedItems.length; i++) {
        if (i !== 6) {
          const production = updatedItems[i].production || 0;
          updatedItems[i].value += production;
        }
      }

      return { items: updatedItems };
    });
  };

  renderItem = ({ item, index }) => {
    const { name, value, production } = item;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.column}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleDecreaseValue(index)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.value}>{value || 0}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleIncreaseValue(index)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {index !== 6 && (
          <View style={styles.column}>
            <Text style={styles.productionLabel}>Produkcja</Text>
            <View style={styles.contentContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleDecreaseProduction(index)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.value}>{production || 0}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleIncreaseProduction(index)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  render() {
    const { items, isButtonDisabled } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={this.renderItem}
        />

        <TouchableOpacity
          style={[styles.button, styles.produkujButton]}
          onPress={this.handleProdukuj}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Produkuj</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  value: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  productionLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
  produkujButton: {
    backgroundColor: '#ccc',
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default Terraformacja;