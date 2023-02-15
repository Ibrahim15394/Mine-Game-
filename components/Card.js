import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../constants/colors";

function Card ({children}){
    return(
        <View style = {style.card}>{children}</View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 24 : 36,
        padding: 16,
        backgroundColor: Colors.primary800,
        margin: 20,
        borderRadius: 10,
        elevation: 8,
      },
});