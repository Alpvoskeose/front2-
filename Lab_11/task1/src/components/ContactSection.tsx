import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
      />
      <TextInput 
        style={[styles.input, { height: 100 }]} 
        placeholder="Message" 
        value={message} 
        onChangeText={setMessage} 
        multiline
      />
      <TouchableOpacity 
        style={[styles.button, (!email || !message) && { backgroundColor: '#ccc' }]} 
        onPress={handleSubmit}
        disabled={!email || !message}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      {submitted && <Text style={{ color: 'green', marginTop: 10 }}>Sent!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', margin: 16, borderRadius: 16, elevation: 2 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  input: { backgroundColor: '#f5f5f5', borderRadius: 8, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: '#eee' },
  button: { backgroundColor: '#0066cc', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});