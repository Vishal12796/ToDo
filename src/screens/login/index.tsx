import { Button } from '@root/component/Button';
import { InputText } from '@root/component/Input';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useLogin } from './useLogin';

export const Login = () => {
  const login = useLogin();

  return (
    <View style={styles.container}>
      <InputText
        placeholder={login.t('Username') + ': emilys'}
        value={login.username}
        onChangeText={login.setUsername}
        autoCapitalize="none"
      />

      <InputText
        placeholder={login.t('Password') + ': emilyspass'}
        value={login.password}
        onChangeText={login.setPassword}
        secureTextEntry
      />

      <Button
        title={login.t('Login')}
        onPress={login.handleLogin}
        loading={login.loading}
      />
    </View>
  );
};
