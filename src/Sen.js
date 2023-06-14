import React, { Component } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class Sen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPlayers: '2',
      players: [],
      totalScores: [],
      updatedScores: [],
    };

    this.handleNumPlayersChange = this.handleNumPlayersChange.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleConfirmScores = this.handleConfirmScores.bind(this);
  }

  handleNumPlayersChange(value) {
    this.setState({ numPlayers: value });
  }

  handleStartGame() {
    const numPlayers = this.state.numPlayers;
    const players = [];
    const totalScores = [];
    const updatedScores = [];

    for (let i = 1; i <= parseInt(numPlayers); i++) {
      players.push({ playerNum: i, score: '' });
      totalScores.push(0);
      updatedScores.push(0);
    }

    this.setState({ players, totalScores, updatedScores });
  }

  handleScoreChange(playerNum, score) {
    this.setState((prevState) => {
      const updatedPlayers = prevState.players.map((player) => {
        if (player.playerNum === playerNum) {
          return { ...player, score };
        }
        return player;
      });

      return { players: updatedPlayers };
    });
  }

  handleConfirmScores() {
    this.setState((prevState) => {
      const players = prevState.players;
      const totalScores = prevState.totalScores;
      const updatedScores = prevState.updatedScores;

      const updatedTotalScores = players.map((player) => {
        const currentScore = totalScores[player.playerNum - 1];
        const score = Number(player.score) || 0;
        const updatedScore = currentScore + score;

        return updatedScore;
      });

      return {
        totalScores: updatedTotalScores,
        updatedScores: updatedTotalScores,
        players: prevState.players.map((player) => ({ ...player, score: '' })),
      };
    });
  }

  renderPlayerScore(player) {
    const playerNum = player.playerNum;
    const score = player.score;

    return (
      <View key={playerNum} style={styles.playerScoreContainer}>
        <Text style={styles.playerNumText}>Gracz {playerNum}:</Text>
        <TextInput
          style={styles.scoreInput}
          value={score}
          onChangeText={(text) => this.handleScoreChange(playerNum, text)}
          keyboardType="numeric"
        />
      </View>
    );
  }

  render() {
    const numPlayers = this.state.numPlayers;
    const players = this.state.players;
    const updatedScores = this.state.updatedScores;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Wybierz liczbę graczy (2-6):</Text>
        <Picker
          style={styles.numPlayersPicker}
          selectedValue={numPlayers}
          onValueChange={this.handleNumPlayersChange}
        >
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
        </Picker>

        <Button title="Rozpocznij grę" onPress={this.handleStartGame} />

        {players.map((player) => this.renderPlayerScore(player))}

        <Button title="Zatwierdź" onPress={this.handleConfirmScores} />

        <Text style={styles.title}>Suma punktów:</Text>
        <View style={styles.scoresContainer}>
          {updatedScores.map((score, index) => (
            <Text key={index} style={styles.scoreText}>
              Gracz {index + 1}: {score}
            </Text>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  numPlayersPicker: {
    height: 40,
    marginBottom: 10,
  },
  playerScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerNumText: {
    fontSize: 16,
    marginRight: 10,
  },
  scoreInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  scoresContainer: {
    marginTop: 10,
  },
  scoreText: {
    marginBottom: 20,
    fontSize: 30
  },
});

export default Sen;