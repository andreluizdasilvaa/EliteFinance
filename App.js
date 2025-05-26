import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor='#F0F4FF' style='dark'/>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
