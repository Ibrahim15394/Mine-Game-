
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function FirstText ({children, style}){
    return(
        <Text style ={[styles.text, style]}>{children}</Text>
    );
}

export default FirstText;

const styles = StyleSheet.create({
    text:{
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans',
      },
});