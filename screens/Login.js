import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

const TEST_USERS = {
	"jnorthway": "test123",
	"test": "Password",
};

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username : "",
			password : "",
			failedLogin: false
		}
		this.loginHandler = this.loginHandler.bind(this)
	}

	loginHandler = () => {
		/* 
			This is where checking a database would go, 
		  hashing password before sending the username/password combo
		*/
		var username = this.state.username.toLowerCase()
		console.log(this.state.username, this.state.password)

		if(username in TEST_USERS){
			if(this.state.password === TEST_USERS[username]){
				this.props.login()
			} 
		}
		this.setState({
			failedLogin : true
		})
	}

	render() {
		return (
			<View style={styles.screen}>
      <View style={styles.titlelogo}>
				<Image style={styles.logo} source={require("../assets/background.png")}></Image>
        <Text style={styles.loginText}>Parachute</Text>
      </View>

			{ this.state.failedLogin && 
				<Text style={{color: 'red'}}>Username or password are incorrect.</Text>
			}

      <View style={styles.loginContainer}>
        <TextInput
           secureTextEntry={false}
					 style={styles.input}
					 placeholder='Username'
					 onChangeText={(username)=>{this.setState({username})}}
					 value={this.state.username}
				/>

				<TextInput
           secureTextEntry={true}
					 style={styles.input}
					 placeholder='Password'
					 onChangeText={(password)=>{this.setState({password})}}
					 value={this.state.password}
				/>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.loginHandler} style={styles.button} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
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
  titlelogo: {
		flex: 1,
		top: 30
	},
  loginText: {
		alignSelf: "center",
		color: "white",
		fontSize: 30,
		top: 30,
		flex: 1
	},

  input: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: 300,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		marginTop: 20,
	},
	
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#3D5A80',
    borderRadius: 100,
    borderWidth: 1,
		borderColor: '#fff',
		marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
	},
	loginContainer:{
		flex: 2,
	},
	logo: {
		alignSelf: "center",
		height: 150,
		width: 400,
		position: "absolute",
		zIndex: -20,
		flex: 1,
	}
})