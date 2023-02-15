import { StyleSheet, Text } from "react-native";



function Title ({children}){
    return(
        <Text style = {styles.title}>{children}</Text>
    );
}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        //fontWeight: "bold",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
        textAlign: "center",
        color: "white",
        maxWidth: '80%',
        width: 380,
      },
});