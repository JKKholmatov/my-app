import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [loading, setLoading] = useState(false);

  const fetchJson = async () => {
    setLoading(true);
    console.log(new Date().toLocaleTimeString() + " Fetch start");
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(new Date().toLocaleTimeString() + " Fetch End");
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => fetchJson()}>
        {loading ? <ActivityIndicator /> : <Text>Fetch Json</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: 100,
    borderRadius: 15,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
