import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoal) =>{
      return currentCourseGoal.filter((goal)=>goal.id !== id);
    });
  }

 
  return (
    <View style={styles.appContiner}>
      <Button
      title='Add new Goal'
      color = "#5e0acc"
      onPress={startAddGoalHandler}/>
    <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList 
        data={courseGoals}
        renderItem={(itemData) => {
            return <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  appContiner: {
    padding: 20,
    flex: 1,
    marginTop:80,
    marginBottom:20,
  },
  goalContainer: {
    flex: 5,
  },

});
