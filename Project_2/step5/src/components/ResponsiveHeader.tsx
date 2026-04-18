import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: { icon: string; onPress: () => void };
  rightAction?: { icon: string; onPress: () => void };
}

export function ResponsiveHeader({ title, leftAction, rightAction }: ResponsiveHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top, height: 56 + insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#0066cc" />
      <View style={styles.headerContent}>
        <View style={styles.headerSide}>
          {leftAction && (
            <TouchableOpacity onPress={leftAction.onPress} style={styles.button}>
              <Text style={styles.icon}>{leftAction.icon}</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.headerSide}>
          {rightAction && (
            <TouchableOpacity onPress={rightAction.onPress} style={styles.button}>
              <Text style={styles.icon}>{rightAction.icon}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#0066cc', elevation: 4, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 },
  headerContent: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 8 },
  headerSide: { width: 48, alignItems: 'center' },
  title: { flex: 1, textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold' },
  button: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  icon: { color: '#fff', fontSize: 20 }
});