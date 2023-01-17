// import { useState } from "react";
// import { View, TextInput, StyleSheet, Button, Modal, Image } from "react-native";

// function GoalInput(props){
//   const [enteredGoalText, setEnteredGoalText] = useState("");

  
//   function goalsOfCourse(enterText) {
//     setEnteredGoalText(enterText);
//   }

//   function goToCourse(){
//     props.onCourse(enteredGoalText);
//     setEnteredGoalText('');
//   }

// return(
//     <Modal
//     visible={props.visible}
//     animationType="slide"
//     >
//     <View style={styles.containerInputAndButton}>
//       <Image style = {styles.image}
//        source={require('../assets/images/goal.jpg')} />
//     <TextInput
//       style={styles.inputText}
//       placeholder="goals of courses"
//       onChangeText={goalsOfCourse}
//       value = {enteredGoalText}
//     />
//     <View style = {styles.buttonContainer}>
//     <View style = {styles.button}>
//     <Button title="Go to Goals" onPress={goToCourse} />
//     </View>
//     <View style = {styles.button}>
//     <Button
//      title="Cancel" 
//      onPress={props.onCancel}
//      />
//     </View>
//     </View>
  
//   </View>
//   </Modal>
// );
// }

// export default GoalInput;

// const styles = StyleSheet.create({
//     containerInputAndButton: {
//         flex: 1,
//         padding:16,
//         justifyContent: "center",
//         alignItems: "center",
//         borderBottomWidth: 1,
//         borderBottomColor: "#CCC",
//         paddingBottom: 30,
//         marginBottom: 10,
//       },
//       inputText: {
//         width: "100%",
//         borderWidth: 1,
//         borderColor: "#ccc",
//         padding: 10,
//       },
//       buttonContainer:{
//         flexDirection: 'row',
//         marginTop: 16,
//       },
//       button:{
//         width: 120,
//         marginHorizontal: 16,
//       },
//       image: {
//         width: 200,
//         height: 120,
//         margin: 10
//       }

// });