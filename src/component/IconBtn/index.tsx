import React from 'react';
import { IconButton } from 'react-native-paper';

type IconBtnProps = {
  onPress: () => void;
  color?: string;
  size?: number;
  icon?: string;
};

const IconBtn: React.FC<IconBtnProps> = ({
  onPress,
  color = 'black',
  size = 24,
  icon = 'arrow-left', // default MaterialCommunityIcons name
}) => {
  return (
    <IconButton icon={icon} iconColor={color} size={size} onPress={onPress} />
  );
};

export default IconBtn;
