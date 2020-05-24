import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

const TEST_USERS = {
	"jnorthway": "test123",
	"test": "password",
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
		this.signup_navigator = this.signup_navigator.bind(this)
	}
	signup_navigator = () => {

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
				
      <View style={styles.titlelogo, {marginTop: 100, marginBottom: 100}}>
        <Text style={{color:"#000000", fontSize: 50, fontFamily:"serif", fontWeight: "bold"}}>Para<Text style={{color:"#0C536C"}}>chute</Text></Text>
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

        <View style={{alignSelf:"center"}}>
						<GradientButton
							style={{marginVertical: 8, elavation: 1, marginTop: 80}}
							textStyle={{ fontSize: 20 }}
							gradientBegin="#187795"
							gradientEnd="#002B3F"
							gradientDirection="diagonal"
							height={70}
							width={200} 
							radius={50}
							impact
							impactStyle='Light'
							onPressAction={this.loginHandler}
						>
							Login
						</GradientButton>
        </View>

				<View style={{flexDirection: "row", textAlign:"center", alignSelf:"center", marginTop: 40}}>
					<Text style={{color:"#858585"}}>
						Dont have an account?
					</Text>
					<Text color={{color:"#0C536C"}} onPress={this.signup_navigator}>Sign up!</Text>
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
		marginTop: 25,
		marginBottom: 25,
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