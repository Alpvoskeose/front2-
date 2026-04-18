import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { GridLayout } from './src/components/GridLayout';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <ResponsiveHeader 
          title="Responsive App" 
          leftAction={{ icon: "☰", onPress: () => {} }}
        />
        <GridLayout columns={2} spacing={15}>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Adaptive Grid</Text>
            <Text>Works on any screen!</Text>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Safe Areas</Text>
            <Text>No more notch issues.</Text>
          </View>
        </GridLayout>
      </View>
    </SafeAreaProvider>
  );
}