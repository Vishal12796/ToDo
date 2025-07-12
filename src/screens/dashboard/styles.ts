import { Colors } from '@root/res/color';
import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
  listCategories: {
    marginVertical: moderateVerticalScale(12),
  },
  listToDo: {
    marginTop: moderateVerticalScale(6),
  },
  btnContainer: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  btnAddToDo: {
    flex: 1,
  },
  btnLogout:{
    marginTop: moderateVerticalScale(6),
    marginBottom: moderateVerticalScale(6)
  },
  txtTriger: {
    paddingVertical: moderateVerticalScale(14),
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: Colors.secondary,
  },
});
