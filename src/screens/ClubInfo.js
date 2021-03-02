import React, {Component} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.16:8000';

class ClubInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.clubData,
      imageData: [],
      images: [],
      choose: false,
    };
  }

  checkinOptions = () => {
    this.setState({
      choose: true,
    });
  };

  cancelCheckin = () => {
    console.log('cancelling checkin options');
    this.setState({
      choose: false,
    });
  };

  render() {
    if (this.state.choose === true) {
      return (
        <ScrollView style={styles.primaryView}>
          <View style={styles.optionCard}>
            <Text style={styles.optionText}>Choose an option to proceed</Text>
            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() =>
                this.props.navigation.navigate('Table', {
                  clubData: this.state.data,
                })
              }>
              <Text style={styles.btnText}>Pick a table now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() =>
                this.props.navigation.navigate('Reservation', {
                  clubData: this.state.data,
                })
              }>
              <Text style={styles.btnText}>Make reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.chekinBtn}
              onPress={() => this.cancelCheckin()}>
              <Text style={styles.btnText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.headerView}>
          <Text style={styles.headerMainText}>{this.state.data.name}</Text>
          <Text style={styles.headerText}>{this.state.data.location}</Text>
        </View>
        <View style={styles.descContainer}>
          <Image
            style={styles.clubLogo}
            source={{uri: BaseUrl + this.state.data.logo}}
          />
          <Text style={styles.descText}>{this.state.data.description}</Text>
          <TouchableOpacity
            style={styles.chekinBtn}
            onPress={() => this.checkinOptions()}>
            <Text style={styles.btnText}>CHECK IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  primaryView: {
    flex: 1,
    backgroundColor: '#FEF2F2',
  },

  headerView: {
    width: WIDTH - 40,
    justifyContent: 'center',
    backgroundColor: '#d92027',
    // rgba(17,24,39,0.7)
    height: 100,
    padding: 10,
    marginTop: 30,
    position: 'relative',
    borderRadius: 7,
    // flex: 1,
    // borderBottomLeftRadius: 30,
    // borderTopRightRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerMainText: {
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'Tisa',
    marginTop: 0,
    color: '#ffcd3c',
  },
  headerText: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'Tisa',
    marginTop: 0,
    color: '#f4f7c5',
  },

  descContainer: {
    width: WIDTH - 40,
    padding: 40,
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  descText: {
    fontWeight: '300',
    fontSize: 16,
    fontFamily: 'Tisa',
    opacity: 0.8,
    // marginTop: 20,
    textAlign: 'justify',
    lineHeight: 30,
    // color: '#FEE2E2',
  },
  chekinBtn: {
    backgroundColor: '#ffcd3c',
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
    fontSize: 17,
    top: 10,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: 'green',
  },

  optionCard: {
    width: WIDTH - 40,
    // backgroundColor: 'white',
    // marginLeft: 20,
    marginTop: 40,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  optionBtn: {
    // backgroundColor: '#ffcd3c',
    borderWidth: 1,
    borderColor: '#ffcd3c',
    width: WIDTH - 50,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },
  optionText: {
    fontWeight: '400',
    fontSize: 15,
    fontFamily: 'Tisa',
    marginTop: 0,
    color: 'black',
  },
  clubLogo: {
    width: '70%',
    height: 100,
    marginBottom: 20,
  },
  cardHeadText: {
    marginTop: 5,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Tisa',
    color: 'red',
  },
  cardText: {
    // marginLeft: 10,
    fontWeight: 'normal',
    fontSize: 12,
    fontFamily: 'Tisa',
  },
});

export default ClubInfo;
