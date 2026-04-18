import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

export function GridLayout({ children, columns = 2, spacing = 12 }: GridLayoutProps) {
  const { width } = useWindowDimensions();
  const itemWidth = (width - spacing * (columns + 1)) / columns;
  const items = React.Children.toArray(children);
  const rows: any[] = [];

  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <View style={[styles.container, { padding: spacing }]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { marginBottom: spacing }]}>
          {row.map((item: any, colIndex: number) => (
            <View 
              key={colIndex} 
              style={[styles.item, { width: itemWidth, marginRight: colIndex < columns - 1 ? spacing : 0 }]}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  row: { flexDirection: 'row', justifyContent: 'flex-start' },
  item: { flex: 1 },
});