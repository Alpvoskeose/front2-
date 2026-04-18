import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

export function AdaptiveLayout({ content }: { content: React.ReactNode }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <ScrollView contentContainerStyle={isTablet ? styles.tabletPadding : styles.phonePadding}>
      <View style={isTablet ? styles.tabletLayout : styles.phoneLayout}>
        {content}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  phonePadding: { padding: 16 },
  tabletPadding: { padding: 32 },
  phoneLayout: { flexDirection: 'column' },
  tabletLayout: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});

export function Card({ title, description }: { title: string; description: string }) {
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.cardTitle}>{title}</Text>
      <Text style={cardStyles.cardDesc}>{description}</Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 16, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  cardDesc: { color: '#666' }
});