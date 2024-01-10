import { createContext, useContext, useState } from 'react';

import { Participant } from '../types';

import { RemovesTheItemFromTheList } from '../functions/RemovesTheItemFromTheList';

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
    setParticipants([...participants, participant]);
  };

  const deleteParticipant = (id: number): void => {
    const deletedParticipant = RemovesTheItemFromTheList({ id, list: participants });

    setParticipants(deletedParticipant);
  };

  return <ContextParticipant.Provider value={{ participants, addNewParticipant, deleteParticipant }}>{children}</ContextParticipant.Provider>;
};

export const useParticipant = () => useContext(ContextParticipant);
