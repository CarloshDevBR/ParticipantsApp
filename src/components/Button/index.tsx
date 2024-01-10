import { TouchableOpacityProps, Text, TouchableOpacity } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
}

export const Button = ({ title, className, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity className={`w-[56px] h-[56px] flex justify-center items-center rounded-sm ${className}`} {...rest}>
      <Text className="text-xl text-white">{title}</Text>
    </TouchableOpacity>
  );
};
