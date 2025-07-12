import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

export const EmptyView = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.txtNoData}>{t('No data found')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: moderateVerticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNoData: {
    textAlign: 'center',
    fontSize: 16,
  },
});
