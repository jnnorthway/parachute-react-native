import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { NetworkInfo } from 'react-native-network-info';

// import { contactHandler } from '../modules/ContactsHandler';
import * as Contacts from 'expo-contacts';


function Home(props) {
  const [address, setAddress] = useState('')
  const [targetAddress, setTargetAddress] = useState('')

  function targetAddressHandler(enteredText) {
    setTargetAddress(enteredText)
  }

  function sendDataHandler() {
    console.log("SENDING DATA!!!")
    getIP()
  }

  async function getIP() {
    NetworkInfo.getIPAddress().then(ipAddress => {
      console.log(ipAddress);
    })
  }


  async function contactHandler() {
    const { status } = await Contacts.requestPermissionsAsync();
    const { data } = await Contacts.getContactsAsync();

    if (data.length > 0) {
      const contact = data[0];
      console.log(contact);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.address}>
        <Text style={styles.addressText}>Device Address: {address}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder='Target IP Address'
          onChangeText={targetAddressHandler}
          value={targetAddress} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={contactHandler} style={styles.button} >
            <Text style={styles.buttonText}>Contacts</Text>
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