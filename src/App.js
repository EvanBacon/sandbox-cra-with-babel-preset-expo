import React, { Component } from "react";
import "./App.css";
import { View } from "react-native";

import Constants from "expo-constants";

class App extends Component {
  render() {
    return (
      <View className="App" style={{ flex: 1 }}>
        <header className="App-header">
          <p>
            Edift <code>src/App.js</code> and save to reload.{" "}
            {Constants.deviceName}
          </p>
          {global.__DEV__ && <p>IN DEV MODE</p>}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </View>
    );
  }
}

export default App;
