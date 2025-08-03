import { Colors } from '@root/res/color';
import { Dimensions, StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginVertical: moderateScale(6),
    paddingHorizontal: moderateScale(16),
  },
  categoryContainer: {
    // backgroundColor: Colors.primary,
    // borderBottomRightRadius: moderateScale(40),
  },
  listContentStyle: {
    // flexWrap: 'wrap',
    // width: Dimensions.get('window').width,
    paddingHorizontal: moderateScale(16),
  },
  listCategories: {
    marginBottom: moderateVerticalScale(2),
  },
  listToDo: {
    marginTop: moderateVerticalScale(6),
  },
  btnContainer: {
    flexDirection: 'row',
    gap: moderateScale(6),
  },
  btnAddToDo: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
  },
  btnLogout: {
    marginTop: moderateVerticalScale(6),
    marginBottom: moderateVerticalScale(6),
    marginHorizontal: moderateScale(16),
  },
  txtTriger: {
    paddingVertical: moderateVerticalScale(14),
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: Colors.secondary,
  },
});
