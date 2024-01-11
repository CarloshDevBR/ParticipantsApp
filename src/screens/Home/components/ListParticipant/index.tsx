import { FlatList, Text, View } from 'react-native';

import { CardParticipant } from './CardParticipant';

import { Participant } from '../../../../types';

type ListParticipant = {
  data: Participant[];
};

export const ListParticipant = ({ data }: ListParticipant) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CardParticipant data={item} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text className="text-white text-sm text-center">Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
      )}
    />
  );
};
