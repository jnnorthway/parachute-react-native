import * as DocumentPicker from 'expo-document-picker';

export default async function filePicker() {
  // TODO: suport multiple files.
  var file = await DocumentPicker.getDocumentAsync({
    type: "*/*",
    copyToCacheDirectory: false,
    multiple: false,
  });
  return file;
}
