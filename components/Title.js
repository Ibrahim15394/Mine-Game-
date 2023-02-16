import { StyleSheet, Text, Platform } from "react-native";



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
        borderWidth: Platform.OS === 'android' ? 2 : 2,
        borderColor: Platform.select({ios: 'white', android: '#ddb52f'}),
        padding: 12,
        textAlign: "center",
        color: 'white' ,
        maxWidth: '80%',
        width: 380,
      },
});