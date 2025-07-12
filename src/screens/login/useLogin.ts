import { useNavigation } from '@react-navigation/native';
import { apiCall } from '@root/api/apiCall';
import { Api, ApiType } from '@root/api/apiConst';
import { NavigationProps } from '@root/navigator/AppNavigator';
import { ScreenNames } from '@root/navigator/ScreenNames';
import { UserDetails } from '@root/types/user';
import { setLocalDataByKey, StorageKeys } from '@root/utils/localStorage';
import { showAlert } from '@root/utils/utils';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLogin = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProps>();
  const [username, setUsername] = useState<string>('emilys');
  const [password, setPassword] = useState<string>('emilyspass');
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    let valid = true;
    if (!username.trim()) {
      showAlert(t('Username is required'));
      valid = false;
      return valid;
    }
    if (!password.trim()) {
      showAlert(t('Password is required'));
      valid = false;
      return valid;
    }
    return valid;
  };

  const handleUserData = (userDetails: UserDetails) => {
    setLocalDataByKey(StorageKeys.UserDetails, userDetails);
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.Dashboard }],
    });
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const payloadData = {
        body: {
          username,
          password,
        },
        endpoint: `${Api.login}`,
        type: ApiType.post,
      };

      await apiCall(
        payloadData,
        (response: AxiosResponse) => {
          setLoading(false);
          const user: UserDetails = response?.data;
          if (user) {
            showAlert(t(`Welcome ${user.firstName}!`), t('Login Successful'));
            handleUserData(user);
          }
        },
        (error: AxiosError) => {
          setLoading(false);
          showAlert(
            error?.message || t('Something went wrong'),
            t('Login Failed'),
          );
        },
      );
    } catch (error: any) {
      setLoading(false);
      showAlert(
        error?.response?.data?.message || t('Something went wrong'),
        t('Login Failed'),
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    t,
    username,
    setUsername,
    password,
    setPassword,
    loading,
    handleLogin,
  };
};
