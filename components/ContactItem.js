import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ContactItem(props) {

  return (
    <TouchableOpacity onPress={props.onSetContact.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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

export default ContactItem