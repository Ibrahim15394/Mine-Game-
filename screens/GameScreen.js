import { useState, useEffect, } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../constants/colors";
import DefaultButton from "../components/DefaultButton";
import Title from "../components/Title";
import Card from "../components/Card";
import FirstText from "../components/FirstText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  console.log("min, max, exclude:===>", min, max, exclude);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You Know that this is worng...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((pevGuessRounds) => [newRndNumber, ...pevGuessRounds]);
  }
  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <FirstText style={styles.text}>Higher Or Lower?</FirstText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </DefaultButton>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </DefaultButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
    <>
      <View style={styles.viewWide}>
        <View style={styles.buttonContainer}>
          <DefaultButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </DefaultButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <DefaultButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </DefaultButton>
        </View>
      </View>
    </>);
  }

  return (
    <ScrollView style = {{flex: 1,}}>
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
  
    </View>
    <View style={styles.listView}>
      <FlatList
        data={guessRounds}
        renderItem={(itemData) => (
          <GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item}
      />
      </View>
    </ScrollView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  text: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  viewWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listView: {
    flex: 1,
    paddingHorizontal: 16,
   
  },
});
