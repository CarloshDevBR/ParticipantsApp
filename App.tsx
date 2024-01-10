import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <StatusBar style="light" />

      <Text className="text-white">Teste</Text>
    </View>
  );
}
