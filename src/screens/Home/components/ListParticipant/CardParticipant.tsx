import { Text, View } from 'react-native';

import { Button } from '../../../../components';

import { Participant } from '../../../../types';

import { useParticipant } from '../../../../context';

interface CardParticipantProps {
  data: Participant;
}

export const CardParticipant = ({ data }: CardParticipantProps) => {
  const { deleteParticipant } = useParticipant();

  return (
    <View className="w-full flex-row items-center mt-2 pl-2 bg-gray-900 rounded-sm">
      <Text className="text-gray-300 flex-1 font-semibold">{data?.title}</Text>

      <Button title="-" className="bg-primary-red rounded-l-none" onPress={() => deleteParticipant(data?.id)} />
    </View>
  );
};
