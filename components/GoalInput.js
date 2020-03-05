import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  function cancelGoalHandler() {
    setEnteredGoal('')
    props.onCancel()
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Course Goal'
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add'
              onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title='Clear'
              onPress={props.onClearGoals} />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              color='red'
              onPress={cancelGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}


// Styles:
const styles = StyleSheet.create({
  button: {
    width: '30%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    marginBottom: 10
  }
});

export default GoalInput