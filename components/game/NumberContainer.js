import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
    );
}


export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8, 
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontSize: 36,
        color: Colors.accent500,
       // fontWeight: 'bold',
        fontFamily: 'open-sans-bold',

    },
});