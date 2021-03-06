import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header'
import LoginPrompt from './screens/Login'
import Home from './screens/Home'
import getPermissions from './modules/PermissionHandler'

export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  function loginHandler() {
    setLoggedIn(true);
    console.log("logged in");
  }
  
  function logoutHandler() {
    setLoggedIn(false);
    console.log("logged out");
  }

  // TODO: only run on app start
  getPermissions();

  if(!loggedIn) {
    return (
      <View style={styles.screen}>
        <LoginPrompt 
          onLogin={loginHandler} />
      </View >
    );
  }
  else {
    return (
      <View style={styles.screen}>
        <Header
          title="Parachute"
          onLogout={logoutHandler} />
        <Home />
      </View >
    );
  }
}

// Styles:
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
