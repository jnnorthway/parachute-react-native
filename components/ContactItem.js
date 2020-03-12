import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ContactItem(props) {
  return (
    <TouchableOpacity onPress={props.onSetContact.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Styles:
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 1,
    backgroundColor: '#ffff',
    borderColor: 'grey',
    borderBottomWidth: .5,
    width: '100%'
  },
  text: {
    fontSize: 16,
    textAlign:'center',
    alignSelf:'center'
  }
});
