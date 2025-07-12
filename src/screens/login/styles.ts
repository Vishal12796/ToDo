import { Colors } from '@root/res/color';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(24),
    backgroundColor: Colors.white,
  },
});
