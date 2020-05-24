import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

import ContactList from '../components/ContactList';
import filePicker from '../modules/FileHandler';

export default class Home extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			fileModalVisible: false
		}
	}

	render() {
	
		
		return (
		<View style={styles.screen}>
			 <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.fileModalVisible}
        onRequestClose={() => {
					this.setState({fileModalVisible : !this.state.fileModalVisible})
				}}
				style={{padding: 50}}
      >
				<View>
				<View style={{backgroundColor: "white", elevation:2, padding: 50, alignSelf: "center"}}>
						<Text style={{color:"#000000", fontSize: 40, fontFamily:"serif", fontWeight: "bold"}}>Send<Text style={{color:"#0C536C"}}> File</Text></Text>
				</View>
				<View style={{flexDirection:"row", alignContent:"cneter"}}>
				<GradientButton
							textStyle={{ fontSize: 20 }}
							gradientBegin="#187795"
							gradientEnd="#002B3F"
							gradientDirection="diagonal"
							height={50}
							width={150} 
							radius={50}
							impact
							impactStyle='Light'
							onPressAction = {()=>{this.setState({fileModalVisible : !this.state.fileModalVisible})}}
						>
							Close
						</GradientButton>
						<GradientButton
							textStyle={{ fontSize: 20 }}
							gradientBegin="#187795"
							gradientEnd="#002B3F"
							gradientDirection="diagonal"
							height={50}
							width={150} 
							radius={50}
							impact
							impactStyle='Light'
							onPressAction = {()=>{this.setState({fileModalVisible : !this.state.fileModalVisible})}}
						>
							Send
						</GradientButton>
				</View>
				</View>
			</Modal>



			<View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 16, alignItems:"center" }}>
						<GradientButton
							style={{position: "absolute", bottom: 0}}
							textStyle={{ fontSize: 20 }}
							gradientBegin="#187795"
							gradientEnd="#002B3F"
							gradientDirection="diagonal"
							height={70}
							width={350} 
							radius={50}
							impact
							impactStyle='Light'
							onPressAction = {()=>{this.setState({fileModalVisible : !this.state.fileModalVisible})}}
						>
							Send File
						</GradientButton>
        </View>
    </View>
		)
	}
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
