import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MemoProblemExample = () => {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
  const [text, setText] = useState("");

  // ❌ Heavy calculation runs on every render
  const total = numbers.reduce((acc, num) => {
    console.log("Calculating sum..."); // this will run even when only text changes
    return acc + num;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Numbers: {numbers.join(", ")}</Text>
      <Text style={styles.result}>Sum: {total}</Text>

      {/* 🔹 Unrelated input */}
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />

      <Button
        title="Add Random Number"
        onPress={() =>
          setNumbers([...numbers, Math.floor(Math.random() * 100)])
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 18, marginBottom: 10 },
  result: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default MemoProblemExample;
