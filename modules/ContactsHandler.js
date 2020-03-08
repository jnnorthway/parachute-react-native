import * as Contacts from 'expo-contacts';

function getItem(contact, item) {
  var items = []
  for (var i in contact) {
    items.push(
      contact[i][item]
    )
  }
  return items
}

function filerContactInfo(contacts) {
  var filteredContacts = [];
  for (var i in contacts) {
    var contact = {
      name: contacts[i]['name'],
      numbers: getItem(contacts[i]['phoneNumbers'], 'number'),
      emails: getItem(contacts[i]['emails'], 'email'),
    };
    filteredContacts.push(contact);
  }
  return filteredContacts
}

function validContact(contact){
  return true
}

function filerContacts(contacts) {
  /*
  Filters contacts.
  filter: contacts with existing parachute account.
  */
 var filteredContacts = [];
  for (var i in contacts) {
    if (validContact(contacts[i])) {
      var contact = {
        id: i.toString(),
        name: contacts[i]['name'],
      };
      filteredContacts.push(contact);
    }
  }
  console.log("NOT IMPLEMENTED")
  return filteredContacts
}

async function contactHandler() {
  var { data } = await Contacts.getContactsAsync();
  // console.log(data)
  var data = filerContactInfo(data);
  data = filerContacts(data);
  return data
}

export default contactHandler;

/*
Contact scheme:

contact: {
  id: "XXXX",
  name: "XXXX XXXX",
  phoneNumbers: ["XXXXXXXXXX","XXXXXXXXXX"],
  emails: ["XXXX@XXXX.XX","XXXX@XXXX.XX"],
}
*/
