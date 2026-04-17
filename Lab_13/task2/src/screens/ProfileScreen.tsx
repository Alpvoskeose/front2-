import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>Welcome, John Doe</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Profile', { userId: '123' })}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#0066cc' }]} 
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={[styles.buttonText, { color: '#0066cc' }]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 },
  userName: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#0066cc', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontWeight: '600' }
});