import { getLocalDataByKey, StorageKeys } from '@root/utils/localStorage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScreenNames } from './ScreenNames';

export const useAppNavigator = () => {
  const { t } = useTranslation();
  const [initialRouteName, setInitialRouteName] = useState<string | null>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const userDetails = await getLocalDataByKey(StorageKeys.UserDetails);
    if (userDetails) {
      setInitialRouteName(ScreenNames.Dashboard);
    } else {
      setInitialRouteName(ScreenNames.Login);
    }
  };

  return {
    initialRouteName,
    t,
  };
};
