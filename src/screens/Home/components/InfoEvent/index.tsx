import { Image, Text, View } from 'react-native';

export const InfoEvent = () => {
  return (
    <>
      <View className="flex items-center">
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            width: 200,
            height: 200,
          }}
        />
      </View>

      <Text className="text-xl text-white font-semibold">Nome do evento</Text>

      <Text className="text-gray-500 font-semibold">Sexta, 4 de Fevereiro de 2024</Text>
    </>
  );
};
