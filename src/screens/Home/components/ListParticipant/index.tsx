import { View } from 'react-native';

import { CardParticipant } from './CardParticipant';

import { Participant } from '../../../../types';

type ListParticipant = {
  data: Participant[];
};

export const ListParticipant = ({ data }: ListParticipant) => {
  return (
    <View>
      {data.map((e) => (
        <CardParticipant key={e.id} data={e} />
      ))}
    </View>
  );
};
