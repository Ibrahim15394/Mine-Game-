import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import DefaultButton from "../components/DefaultButton";
import FirstText from "../components/FirstText";
import Title from "../components/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  function inputNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber);
    // const choseNumber = enteredNumber;
    if (choseNumber <= 0 || choseNumber > 99 || isNaN(choseNumber)) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99 ",
        [{ text: "Okey", style: "destructive", onPress: restInputHandler }]
      );
    }
    onPickNumber(choseNumber);
  }

  function restInputHandler() {
    setEnteredNumber("");
  }

  const marginTopDimensions = height < 380 ? 30 : 100;

  return (
    <ScrollView style = {styles.scr}>
    <KeyboardAvoidingView style = {styles.scr} behavior = 'position'>
    <View style={[styles.screen, { marginTop: marginTopDimensions }]}>
      <Title>Guess My Number</Title>
      <Card>
        <FirstText>Enter a Number</FirstText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={inputNumberHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={restInputHandler}>Rest</DefaultButton>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={confirmInputHandler}>Confirm</DefaultButton>
          </View>
        </View>
      </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  scr: {flex: 1,},
  screen: {
    flex: 1,
   // marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 40,
    width: 50,
    textAlign: "center",
    fontSize: 25,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
