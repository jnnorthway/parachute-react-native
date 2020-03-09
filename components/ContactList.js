import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, FlatList } from 'react-native';

import ContactItem from './ContactItem';
import contactHandler, { getContact } from '../modules/ContactsHandler';

export default function ContactList(props) {
  const [contacts, setContacts] = useState([]);

  function cancelContactsList() {
    props.onCancel();
  }

  async function getContactsHandler() {
    var all_contacts = await contactHandler();
    setContacts(all_contacts);
  }

  function setContact(selectedContactId) {
    var contact = getContact(contacts, selectedContactId);
    props.onSetContact(contact);
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide">
      <FlatList
        style={styles.scrollList}
        data={contacts}
        renderItem={itemData => (
        <ContactItem
          id={itemData.item.id}
          onSetContact={setContact}
          title={itemData.item.name} />
        )}>)}
      </FlatList>     
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='load'
            onPress={getContactsHandler} />
        </View>
        <View style={styles.button}>
          <Button
            title='Cancel'
            color='red'
            onPress={cancelContactsList} />
        </View>
      </View>
    </Modal>
  );
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
  },
  scrollList: {
    margin: 10,
    backgroundColor: '#ccc'
  }
});
