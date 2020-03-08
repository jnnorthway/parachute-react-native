import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

import ContactList from '../components/ContactList'

import contactHandler from '../modules/ContactsHandler';

import filePicker from '../modules/FileHandler'

function Home(props) {
  const [targetAddress, setTargetAddress] = useState('')
  const [file, setFile] = useState({})
  const [contactsMode, setContactsMode] = useState(false)

  function targetAddressHandler(enteredText) {
    setTargetAddress(enteredText)
  }

  function selectFileHandler() {
    console.log("SELECTING FILE!!!")
    setFile(filePicker())
    console.log(file)
  }

  function selectContact(contact) {
    console.log(contact)
    setContactsMode(false)
  }

  function sendDataHandler() {
    console.log("SENDING DATA!!!")
  }

  function cancelContacts() {
    setContactsMode(false)
  }

  function getContactsHandler() {
    setContactsMode(true);
  }

  return (
    <View style={styles.screen}>
      <ContactList
        visible={contactsMode}
        onSetContact={selectContact}
        onCancel={cancelContacts} />
      <View style={styles.address}>
        <Text style={styles.addressText}>Server Address:</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder='Target IP Address'
          onChangeText={targetAddressHandler}
          value={targetAddress} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={getContactsHandler} style={styles.button} >
            <Text style={styles.buttonText}>Contacts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
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
    </View>
  )
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
  addressText: {
    color: '#495867',
    fontSize: 20,
  },
  input: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: 300,
    padding: 5,
    marginBottom: 30
  },
  button: {
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

export default Home