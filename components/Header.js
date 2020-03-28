import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Header extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<View style={styles.header}>
				<View style={styles.buttonContainer} />
				<View style={styles.title}>
					<Text style={styles.headerTitle}>{this.props.title}</Text>
				</View>
				<View>
					<TouchableOpacity onPress={this.props.logout} style={styles.button} >
						<Text style={styles.buttonText}>Logout</Text>
					</TouchableOpacity>
				</View>
    </View>
		)
	}
}
// Styles:
const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingLeft: "20%",
    paddingRight: 10,
    height: 110,
    paddingTop: 40,
    backgroundColor: '#3D5A80',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 25,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});