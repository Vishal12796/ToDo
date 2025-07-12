import { Colors } from '@root/res/color';
import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  root:{
    flex:1
  },
  container: {
    paddingHorizontal: moderateScale(16),
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: moderateVerticalScale(8),
    marginBottom: moderateVerticalScale(6),
  },
  row: {
    flexDirection: 'row',
    gap: moderateScale(10),
    marginBottom: moderateVerticalScale(8),
  },
  pickerWrapper: {
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    backgroundColor: Colors.white,
    borderColor: Colors.borderColor,
  },
  submitButton: {
    marginTop: moderateVerticalScale(30),
    marginBottom: moderateVerticalScale(6)
  },
});
