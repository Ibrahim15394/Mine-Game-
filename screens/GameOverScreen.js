import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import DefaultButton from "../components/DefaultButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 140;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView>
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.nestText}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.nestText}>{userNumber}</Text>.
      </Text>
      <DefaultButton onPress={onStartNewGame}>Start New Game</DefaultButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // height: deviceWidth < 380 ? 150 : 300,
    // width: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: deviceWidth < 80 ? 24 : 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 23,
    marginBottom: 24,
  },
  nestText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
