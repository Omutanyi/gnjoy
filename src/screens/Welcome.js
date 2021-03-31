import React, {Component} from 'react';
import {
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

class Welcome extends Component {
  render() {
    return (
      <ImageBackground
        source={require('/home/javier/final_Project/club/gnjoy/src/assets/pics/wel1.jpg')}
        resizeMode="cover"
        style={styles.card}>
        <View style={styles.child}>
          <Text style={styles.headerMainText}> WELCOME TO GNJOY </Text>
          <Text style={styles.headerText}> You Only Live Once </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.btnText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    width: WIDTH,
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerMainText: {
    fontWeight: '700',
    fontSize: 23,
    fontFamily: 'Tisa',
    marginTop: 0,
    color: '#ffcd3c',
  },
  headerText: {
    fontWeight: '300',
    fontSize: 18,
    fontFamily: 'Tisa',
    marginTop: 20,
    color: '#f4f7c5',
  },
  child: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  loginBtn: {
    backgroundColor: 'orange',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    marginTop: 200,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },
  btnText: {
    fontWeight: '600',
    fontSize: 15,
    top: 10,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#FFFFFF',
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

export default Welcome;
