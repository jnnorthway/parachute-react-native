import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

function GoalItem(props) {
  return (
    <TouchableNativeFeedback onLongPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}


// Styles:
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 2,
    backgroundColor: '#ffff',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem