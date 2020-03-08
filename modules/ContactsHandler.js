import * as Contacts from 'expo-contacts';

async function contactHandler() {
  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.Emails],
  });
  
  if (data.length > 0) {
    const contact = data[0];
    console.log(contact);
  }
}

export default contactHandler;
