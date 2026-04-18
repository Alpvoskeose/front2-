import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { products } from '../data/products';

export function ProductListScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 5 }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: '#fff' }
});