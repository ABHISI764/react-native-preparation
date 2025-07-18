import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

export default function JavaScriptCompilerForMobile() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    const logs = [];

    // Backup original console.log
    const originalConsoleLog = console.log;

    // Override console.log to capture logs
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    try {
      const result = eval(code); // Use with care
      if (logs.length > 0) {
        setOutput(logs.join('\n'));
      } else {
        setOutput(String(result));
      }
    } catch (error) {
      setOutput('Error: ' + error.message);
    }

    // Restore original console.log
    console.log = originalConsoleLog;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>JavaScript Compiler</Text>
      <ScrollView style={styles.editorContainer}>
        <TextInput
          multiline
          placeholder="Write your JavaScript code here"
          value={code}
          onChangeText={setCode}
          style={styles.codeInput}
          autoCapitalize='none'
        />
      </ScrollView>
      <Button title="Run Code" onPress={runCode} />
      <View style={styles.outputBox}>
        <Text style={styles.outputHeading}>Output:</Text>
        <Text style={styles.outputText}>{output}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  editorContainer: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  codeInput: {
    minHeight: 200,
    fontSize: 16,
    padding: 10,
    fontFamily: 'Courier',
  },
  outputBox: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  outputHeading: {
    color: '#0f0',
    fontWeight: 'bold',
  },
  outputText: {
    color: '#fff',
    marginTop: 5,
  },
});
