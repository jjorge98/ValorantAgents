import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { Alert, ImageBackground } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/button/CustomButton';
import { styles } from '../assets/styles/styles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cpf: '',
      password: '',
    };
  }

  checkCpf = cpf => {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length === 11) {
      cpf = cpf.split('');

      var v1 = 0;
      var v2 = 0;
      var aux = false;

      for (var i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] !== cpf[i]) {
          aux = true;
        }
      }

      if (aux === false) {
        return false;
      }

      for (var i = 0, p = 10; i < cpf.length - 2; i++, p--) {
        v1 += cpf[i] * p;
      }

      v1 = (v1 * 10) % 11;

      if (v1 === 10) {
        v1 = 0;
      }

      // eslint-disable-next-line eqeqeq
      if (v1 != cpf[9]) {
        return false;
      }

      for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p;
      }

      v2 = (v2 * 10) % 11;

      if (v2 === 10) {
        v2 = 0;
      }

      // eslint-disable-next-line eqeqeq
      if (v2 != cpf[10]) {
        return false;
      } else {
        return true;
      }
    }

    return false;
  };

  onPress = () => {
    // Search for a way to show loading animation
    if ([this.state.cpf, this.state.password].includes('')) {
      Alert.alert('Preencha todos os campos para continuar!');
    } else if (!this.checkCpf(this.state.cpf)) {
      Alert.alert('CPF inválido!', 'Verifique e tente novamente!');
    } else if (this.state.password.length < 5) {
      Alert.alert(
        'Senha inválida!',
        'O tamanho da senha deve ser maior que 5 caracteres. Verifique e tente novamente!',
      );
    } else {
      this.props.navigation.navigate('Home', { screen: 'Home' });
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.imgBackgroundL}
        source={{
          uri: 'https://i.pinimg.com/originals/68/71/a1/6871a1baad18a31d32f8aeaa4fab2aa7.jpg',
        }}>
        <Animatable.View style={styles.mainContentL}>
          <Animatable.View animation="slideInDown">
            <Animatable.Text style={styles.titleL}>Login</Animatable.Text>
          </Animatable.View>

          <Animatable.View style={styles.inputAreaL} animation="slideInLeft">
            <CustomInput
              placeholder="CPF"
              keyboard="number-pad"
              isSecure={false}
              changeFunction={cpf => {
                this.setState({ cpf: cpf });
              }}
            />

            <CustomInput
              placeholder="Senha"
              keyboard="default"
              isSecure={true}
              changeFunction={password => {
                this.setState({ password: password });
              }}
            />
          </Animatable.View>

          <Animatable.View animation="slideInUp">
            <CustomButton title="Login" onPressFunction={this.onPress} />
          </Animatable.View>
        </Animatable.View>
      </ImageBackground>
    );
  }
}
