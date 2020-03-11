import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

import ContactList from '../components/ContactList';
import filePicker from '../modules/FileHandler';

export default function Home(props) {
  const [targetAddress, setTargetAddress] = useState('');
  const [file, setFile] = useState({});
  const [selectedContact, setSelectedContact] = useState({});
  const [contactsMode, setContactsMode] = useState(false);

  function targetAddressHandler(enteredText) {
    setTargetAddress(enteredText);
  }

  function selectContact(contact) {
    console.log(contact);
    setSelectedContact(contact);
    setContactsMode(false);
  }

  function cancelContacts() {
    setContactsMode(false);
  }

  function getContactsHandler() {
    setContactsMode(true);
  }

  async function selectFileHandler() {
    console.log("SELECTING FILE!!!");
    var selectedFile = await filePicker()
    setFile(selectedFile);
    console.log(file);
  }

  function sendDataHandler() {
    console.log("SENDING DATA!!!");
  }


  return (
    <View style={styles.screen}>
      <ContactList
        visible={contactsMode}
        onSetContact={selectContact}
        onCancel={cancelContacts} />
      <View style={styles.address}>
        <Text style={styles.dataText}>Server Address:</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder='Target IP Address'
          onChangeText={targetAddressHandler}
          value={targetAddress} />
      </View>
      <View stle={styles.dataContainer}>
        <Text style={styles.dataText}>Send file to: {selectedContact.name}</Text>
      </View>
      <View stle={styles.dataContainer}>
        <Text style={styles.dataText}>File: {file.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={getContactsHandler} style={styles.button} >
          <Text style={styles.buttonText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectFileHandler} style={styles.button} >
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={sendDataHandler} style={styles.button} >
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  address: {
    padding: 30,
    marginBottom: 40,
  },
  dataText: {
    color: '#495867',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  dataContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: 300,
    padding: 5,
    marginBottom: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%'
  },
  button: {
    flex: 1,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#3D5A80',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
})
