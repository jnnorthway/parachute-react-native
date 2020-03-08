import * as DocumentPicker from 'expo-document-picker';

async function filePicker() {
  // TODO: suport multiple files.
  var file = await DocumentPicker.getDocumentAsync({
    type: "*/*",
    copyToCacheDirectory: false,
    multiple: false,
  })
  return file
}

export default filePicker;
