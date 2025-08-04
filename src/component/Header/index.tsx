import { useAppTheme } from '@root/hooks/useAppTheme';
import { ThemeColors } from '@root/res/color';
import React from 'react';
import {
  GestureResponderEvent,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

type HeaderProps = {
  title: string;
  showLeftAction?: boolean;
  onLeftActionPress?: (event: GestureResponderEvent) => void;
  LeftActionComponent?: React.ComponentType;
  style?: ViewStyle;
};

const Header: React.FC<HeaderProps> = ({
  title,
  showLeftAction = false,
  onLeftActionPress,
  LeftActionComponent,
  style,
}: HeaderProps) => {
  const { colors } = useTheme<ThemeColors>();
  const appTheme = useAppTheme();

  return (
    <View style={style}>
      <StatusBar barStyle={appTheme.barStyle} />
      <View style={styles.container}>
        <View style={styles.left}>
          {showLeftAction && LeftActionComponent ? (
            <TouchableOpacity
              onPress={onLeftActionPress}
              style={styles.leftAction}
            >
              <LeftActionComponent />
            </TouchableOpacity>
          ) : (
            <View style={styles.leftAction} />
          )}
        </View>

        <View style={styles.center}>
          <Text
            style={[styles.title, { color: colors.secondaryText }]}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View style={styles.right} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateVerticalScale(48),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  left: {
    width: moderateScale(50),
  },
  leftAction: {},
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  right: {
    width: moderateScale(50),
  },
});

export default Header;
