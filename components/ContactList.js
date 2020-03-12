import React, { useState } from 'react';
import { View, StyleSheet, Modal, FlatList, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

import ContactItem from './ContactItem';
import contactHandler from '../modules/ContactsHandler';

export default function ContactList(props) {
  const [contactsList, setContactsList] = useState([]);
  const [listHolder, setListHolder] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  function cancelContactsList() {
    cleanSearch()
    props.onCancel();
  }

  async function refresh() {
    setIsFetching(true);
    setSearchText("");
    await getContactsHandler();
    setIsFetching(false);
  }

  async function getContactsHandler() {
    var contacts = await contactHandler();
    setContactsList(contacts);
    setListHolder(contacts);
  }

  function cleanSearch() {
    setSearchText("");
    setListHolder(contactsList)
  }

  function setContact(id) {
    cleanSearch()
    props.onSetContact(contactsList[id]);
  }

  function searchFilterFunction(text) {
    setSearchText(text);
    const newData = contactsList.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setListHolder(newData);  
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide">
      <View>
        <SearchBar
          placeholder="Type Here..."
          value={searchText}
          onChangeText={searchFilterFunction}
          autoCorrect={false}
        />
      </View>
      <FlatList
        style={styles.scrollList}
        data={listHolder}
        onRefresh={refresh}
        refreshing={isFetching}
        renderItem={itemData => (
        <ContactItem
          id={itemData.item.id}
          onSetContact={setContact}
          title={itemData.item.name} />
        )}>)}
      </FlatList>     
      <View>
        <TouchableOpacity onPress={cancelContactsList} style={styles.TouchableOpacityStyle} >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}


// Styles:
const styles = StyleSheet.create({
  button: {
    width: '30%'
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
    borderTopWidth: 0, borderBottomWidth: 0,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  TouchableOpacityStyle:{
    position: 'absolute',
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    backgroundColor: '#F03A47',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff'
  }
});
