import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameOverScreen(){
return(
    <View  style = {styles.screen}>
        <Title>Game Over!</Title>
        <View style = {styles.imageContainer}>
            <Image style = {styles.image} source={require('../assets/images/success.png')}/>
        </View>
        <View>
            <Text>Your phone needed X rounds to guess the number Y .</Text>
        </View>
    </View>
);
}


export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer:{
        height: 300, 
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image:{
        height: '100%',
        width: '100%',
    },
});
