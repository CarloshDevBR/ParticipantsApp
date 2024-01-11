import { createContext, useContext, useState } from 'react';

import { Alert } from 'react-native';

import { Participant } from '../types';

import { RemovesTheItemFromTheList } from '../functions/RemovesTheItemFromTheList';
import { FindItemInList } from '../functions/FindItemInList';

import { defaultParticipantsContext } from './defaults';

interface ParticipantProps {
  participants: Participant[];
  addNewParticipant: (data: Participant) => void;
  deleteParticipant: (id: number) => void;
}

const ContextParticipant = createContext<ParticipantProps>(defaultParticipantsContext);

export const ProviderParticipant = ({ children }: { children: React.ReactNode }) => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const addNewParticipant = (participant: Participant): void => {
    if (!participant.title) return Alert.alert('Nada Adicionado', 'Digite um nome de um participante');

    const repeatParticipant = FindItemInList({ data: participants, callBack: (item) => item.title === participant.title });

    if (repeatParticipant) return Alert.alert('Participante Existe', 'Já existe um participante com esse nome na lista.');

    setParticipants([...participants, participant]);
  };

  const deleteParticipant = (id: number): void => {
    const deletedParticipant = RemovesTheItemFromTheList({ id, list: participants });

    setParticipants(deletedParticipant);
  };

  return <ContextParticipant.Provider value={{ participants, addNewParticipant, deleteParticipant }}>{children}</ContextParticipant.Provider>;
};

export const useParticipant = () => useContext(ContextParticipant);
