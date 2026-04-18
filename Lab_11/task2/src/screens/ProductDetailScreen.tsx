import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export function ProductDetailScreen({ route }: any) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.description}</Text>
      <View style={styles.badge}>
        <Text>Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  badge: { 
    marginTop: 20, padding: 10, borderRadius: 5, 
    ...Platform.select({ ios: { backgroundColor: '#e6f0ff' }, android: { backgroundColor: '#f0f0f0' } }) 
  }
});