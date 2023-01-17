// import { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   FlatList,
//   Button
// } from "react-native";
// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';

// export default function App() {

//   const [modelIsVisible, setModelISVisible] = useState(false);
//   const [courseGoal, setCourseGoal] = useState([]);

//   function goToCourse(enteredGoalText) {
//     setCourseGoal((currentCourseGoal) => [
//       ...currentCourseGoal,
//       { text: enteredGoalText, id: Math.random().toString() },
//     ]);
//     endModelISVisible(false);
//   }

//   function deletedGoalCourse(id){
// setCourseGoal(currentCourseGoal => {
//   return currentCourseGoal.filter((goal) => goal.id !== id);
// })
//   }

//   function startModelISVisible(){
//     setModelISVisible(true);
//   }

  
//   function endModelISVisible(){
//     setModelISVisible(false);
//   }


//   return (
//     <View style={styles.container}>
//       <Button 
//       title="Add New Goal"
//        color='#5e0acc'
//        onPress={startModelISVisible}
//        />
//     <GoalInput 
//     visible= {modelIsVisible}
//     onCourse = {goToCourse}
//     onCancel = {endModelISVisible}
//     />
//       <View style={styles.goalsView}>
//         <FlatList
//           data={courseGoal}
//           renderItem={(itemData) => {
//             return (
//         <GoalItem 
//         text = {itemData.item.text}
//         id = {itemData.item.id}
//         onDeletedGoal = {deletedGoalCourse}
//         />
//             );
//           }}
//           keyExtractor={(item) => {
//             return item.id;
//           }}
//         />
//       </View>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },

//   goalViewText: {
//     borderRadius: 8,
//     margin: 8,
//     padding: 8,
//     backgroundColor: "blue",
//   },
//   goalsView: {
//     flex: 5,
//   }

// });
