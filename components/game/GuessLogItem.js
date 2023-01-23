import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({roundNumber, guess}) => {
    return(
        <View style = {Styles.listItem}>
            <Text style = {Styles.text}>#{roundNumber}</Text>
            <Text style = {Styles.text}>Opponent's Guess: {guess}</Text>
        </View>
    );
}


export default GuessLogItem;

const Styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.primary800,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    text:{
        fontFamily: 'open-sans',
    },
});