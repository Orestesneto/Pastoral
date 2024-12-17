import React, { useState, useContext} from 'react';
import { Platform , View, Text} from 'react-native';

import { 
  Background, 
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext); // Passando AuthContext como argumento
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn(email, password); // Certifique-se de passar os parâmetros necessários
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo 
          source={require('../../assets/logo branca pastoral.png') }
          style={{ width: 250, height: 75}}
        />

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          <SubmitText>{loadingAuth ? 'Carregando...' : 'Acessar'}</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

        <View style={{ marginTop: 50, alignItems: 'center' }}>
             <Text style={{ fontSize: 18, color: '#FFF' }}>Sistema de Apoio para Encontros da Pastoral</Text>
        </View>





        
          <View style={{ marginTop: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, color: '#FFF', marginTop: 10 }}>
              @Desenvolvido por Orestes Neto
            </Text>
          </View>
       
      </Container>
    </Background>
  );
}

