import { SafeAreaView, ScrollView } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ScrollView>
        <ProfileCard 
          name="Alpvoskeose" 
          role="Data Scientist" 
          bio="University student from Kazakhstan. Passionate about AI and Software Development." 
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}