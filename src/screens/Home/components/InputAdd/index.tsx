import { TextInput, View } from 'react-native';

import { Button } from '../../../../components';

type InputAddProps = {
  value: string;
  onChangeTextInput: (text: string) => void;
  onPressButton: () => void;
};

export const InputAdd = ({ value, onChangeTextInput, onPressButton }: InputAddProps) => {
  return (
    <View className="w-full flex flex-row mt-9 mb-11">
      <TextInput
        className="flex-1 h-[56px] bg-gray-300 rounded-sm px-2 font-semibold mr-2"
        placeholder="Pesquisar"
        value={value}
        onChangeText={onChangeTextInput}
      />

      <Button title="+" className="bg-primary-green" onPress={onPressButton} />
    </View>
  );
};
