import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';

 import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

const [userNumber, setUserNumber] = useState();
const [gameIsOver, setGameIsOver] = useState(true);
const [guessRounds, setGuessRounds] = useState(0);


const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf') 
});

if(!fontsLoaded){
  return <AppLoading/>
}

function pickedNumberHandler(pickedNumber){
setUserNumber(pickedNumber);
setGameIsOver(false);
}

function onStartNewGameHandler(){
  setUserNumber(null);
  setGuessRounds(0);
}


let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

if(userNumber){
  screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>
}
if(gameIsOver && userNumber){
  screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={onStartNewGameHandler}/>
}

function gameOverHandler(numberOfRounds){
  setGameIsOver(true);
  setGuessRounds(numberOfRounds);
}

  return (
    <>
    <StatusBar style = "inverted"/>
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.appScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.appScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.appScreen}>{screen}</SafeAreaView>
        {/* {screen}  */}
       
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,

  },
});
