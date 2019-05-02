import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Camera } from "expo-camera";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Expo for Web</Text>
        {global.__DEV__ && <Text style={{ color: "white" }}>IN DEV MODE</Text>}
        <Text style={styles.text}>
          Edift <code>src/App.js</code> and save to reload.
        </Text>
        <Text style={styles.text}>
          Constants: {JSON.stringify(Constants, null, 2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24
  },
  text: {
    color: "white"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24
  }
});

export default App;
