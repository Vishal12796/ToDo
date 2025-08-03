import { Button } from '@root/component/Button';
import { InputText } from '@root/component/Input';
import { Screen } from '@root/component/Screen';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useLogin } from './useLogin';

export const Login = () => {
  const login = useLogin();

  return (
    <Screen>
      <View style={styles.container}>
        <InputText
          placeholder={login.t('Username') + ': emilys'}
          value={login.username}
          label={login.t('Username')}
          onChangeText={login.setUsername}
          autoCapitalize="none"
        />

        <InputText
          placeholder={login.t('Password') + ': emilyspass'}
          value={login.password}
          label={login.t('Password')}
          onChangeText={login.setPassword}
          secureTextEntry
        />

        <Button
          title={login.t('Login')}
          onPress={login.handleLogin}
          loading={login.loading}
        />
      </View>
    </Screen>
  );
};
