import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputCointner}>
                <Image style={styles.image}
                source={require('../assets/goal.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Course Goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}  />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
const styles = StyleSheet.create({
    inputCointner: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        padding: 8,
        backgroundColor:'white',
    },
    buttonContainer:{
    flexDirection: 'row',
    marginTop: 16,

    },
    button:{
        widht:100,
        marginHorizontal:8,
    },
    image:{
        width:100,
        height: 100,
        margin:20
    },
});