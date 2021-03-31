import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
// import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

// firebase authentication import
import auth from '@react-native-firebase/auth';

const {width: WIDTH} = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      isAuthenticated: false,
      isLoading: false,
      typedEmail: '',
      password: '',
      username: '',
      user: null,
    };
  }

  login = () => {
    if (this.state.typedEmail === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!');
      console.log('Home page should load');
    } else {
      this.setState({
        isLoading: true,
      });
      auth()
        .signInWithEmailAndPassword(this.state.typedEmail, this.state.password)
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          this.setState({
            isLoading: false,
            typedEmail: '',
            password: '',
          });
          this.props.navigation.navigate('Club');
        })
        .catch((error) => this.setState({errorMessage: error.message}));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={loginStyle.preloader}>
          <ActivityIndicator size="large" color="#FFC107" />
        </View>
      );
    }
    return (
      <View style={loginStyle.primaryView}>
        <View style={loginStyle.loginView}>
          <Text style={loginStyle.loginText}>
            Please enter your credentials to proceed
          </Text>
          <View>
            <TextInput
              style={loginStyle.input}
              placeholder={'Enter your email'}
              value={this.state.typedEmail}
              onChangeText={(text) => this.setState({typedEmail: text})}
              placeholderTextColor={'black'}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
          </View>
          <View>
            <TextInput
              style={loginStyle.input}
              value={this.state.password}
              placeholder={'Password'}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              placeholderTextColor={'black'}
              underlineColorAndroid="transparent"
              Required
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
          </View>
          <TouchableOpacity
            style={loginStyle.loginBtn}
            onPress={() => this.login()}>
            <Text style={loginStyle.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={loginStyle.signupBtn}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={loginStyle.btnText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const loginStyle = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d92027',
    position: 'absolute',
    padding: 0,
    borderRadius: 7,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 15,
    width: WIDTH - 70,
  },
  loginText: {
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'notoserif',
    marginTop: 0,
    color: '#ffedcc',
  },
  input: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 7,
    paddingLeft: 45,
    backgroundColor: '#fff',
    marginTop: 20,
    color: 'black',
    marginHorizontal: 25,
  },
  loginBtn: {
    backgroundColor: 'orange',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },
  btnText: {
    fontWeight: '500',
    fontSize: 15,
    top: 10,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#FFFFFF',
  },
  preloader: {
    borderRadius: 50,
    top: '40%',
    padding: 20,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
  },
  signupBtn: {
    // backgroundColor: 'grey',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    top: 5,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },
});

export default Login;
