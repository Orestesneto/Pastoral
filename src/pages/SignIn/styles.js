import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color:rgb(1, 12, 43);
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color:rgb(235, 229, 229);
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color:rgb(0, 0, 0);
  margin-bottom: 15px;
`;


export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color:rgb(168, 168, 235);
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color:rgb(19, 168, 156);
  font-style: oblique;
`;


