import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    login(email.trim().toLowerCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Kadai<Text style={{color: '#ff9900'}}>App</Text></Text>
      <Text style={styles.subtitle}>Your Premium Local Marketplace</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Email Address" 
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.hintBox}>
        <Text style={styles.hintTitle}>Demo Logins:</Text>
        <Text style={styles.hintText}>• Admin: admin@gmail.com</Text>
        <Text style={styles.hintText}>• Shop Owner: shop@gmail.com</Text>
        <Text style={styles.hintText}>• Customer: any other email</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#131921', justifyContent: 'center', padding: 25 },
  logo: { fontSize: 38, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  subtitle: { color: '#ccc', textAlign: 'center', marginBottom: 40, fontSize: 14 },
  inputContainer: { backgroundColor: '#fff', borderRadius: 8, marginBottom: 20, paddingHorizontal: 15 },
  input: { height: 50, color: '#000', fontSize: 16 },
  loginBtn: { backgroundColor: '#ff9900', padding: 15, borderRadius: 8, alignItems: 'center' },
  loginBtnText: { color: '#111', fontSize: 18, fontWeight: 'bold' },
  hintBox: { marginTop: 40, padding: 15, backgroundColor: '#232f3e', borderRadius: 8 },
  hintTitle: { color: '#ff9900', fontWeight: 'bold', marginBottom: 5 },
  hintText: { color: '#fff', fontSize: 13, marginVertical: 2 }
});