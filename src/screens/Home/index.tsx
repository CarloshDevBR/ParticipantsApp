import { useState } from 'react';

import { ScrollView, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { ListParticipant, InfoEvent, InputAdd } from './components';

import { useParticipant } from '../../context';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  const { participants, addNewParticipant } = useParticipant();

  const isVisibleBorder = participants.length > 0;

  return (
    <ScrollView className="flex-1 bg-purple-950 pt-10 px-6">
      <StatusBar style="light" />

      <InfoEvent />

      <InputAdd
        value={inputValue}
        onChangeTextInput={(value) => setInputValue(value)}
        onPressButton={() => {
          addNewParticipant({
            id: Math.random(),
            title: inputValue,
          });

          setInputValue('');
        }}
      />

      {isVisibleBorder && <View className="border border-gray-900 rounded-sm" />}

      <ListParticipant data={participants} />
    </ScrollView>
  );
}
