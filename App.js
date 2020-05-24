import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import Header from './components/Header'
import Login from './screens/Login'
import Home from './screens/Home'
import SignUp from './screens/SignUp'
import getPermissions from './modules/PermissionHandler'

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			loggedIn : true,
			loading: false,
		}
		this.login = this.login.bind(this)
	}
	
	login = () => {
		this.setState({loading: true})

		setTimeout(()=>{
			this.setState({
				loggedIn : true,
				loading : false
			})
		}, 5000)

    console.log("logged in");
  }
  
  logoutHandler = () => {
		this.setState({loggedIn : false})
		console.log("logged out");
  }

  // TODO: only run on app start
	render() {
		if(this.state.loggedIn){
			return (
				<View style={styles.screen}>
					<Header
						title="Parachute"
						logout={this.logoutHandler} />
					<Home />
				</View >
			);
		}
		if(this.state.loading){
			return(
					<View style={styles.loadingscreen}>
						<View style={styles.titlelogo, {marginTop: 120, marginBottom: 80}}>
						<Text style={{color:"#000000", fontSize: 50, fontFamily:"serif", fontWeight: "bold"}}>Para<Text style={{color:"#0C536C"}}>chute</Text></Text>
					</View>
						<ActivityIndicator
								animating={true}
								color="#3D5A80"
								size="large"
								style={styles.loadingindicator}
						/>
					</View>
				)
		}
		return(
			<View style={styles.screen}>
					<Login 
						login={this.login} />
						{/* <SignUp /> */}
				</View >
		)
	}
}

// Styles:
const styles = StyleSheet.create({
  screen: {
    flex: 1,
	},
	loadingscreen:{
		flex: 1,
		alignItems: "center",
	},
	loadingindicator: {
		flex: 1,
		alignSelf: "center",
	},
	title: {
		marginTop: 100,
    color: '#3D5A80',
    fontSize: 40,
	}
});