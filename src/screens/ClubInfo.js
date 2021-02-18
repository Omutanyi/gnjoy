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
const BaseUrl = 'http://192.168.0.101:8000';

class ClubInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.clubData,
      imageData: [],
      images: [],
    };
  }
  render() {
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
            // onPress={() => this.login()}
          >
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
    padding: 10,
    // backgroundColor: '#d92027',
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  descText: {
    fontWeight: '300',
    fontSize: 16,
    fontFamily: 'Tisa',
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

  searchInput: {
    width: WIDTH - 80,
    height: 45,
    borderRadius: 50,
    paddingLeft: 25,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FEE2E2',
    marginTop: 10,
    marginBottom: 0,
    color: 'white',
    alignSelf: 'center',
  },

  cardContainer: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  clubCard: {
    width: WIDTH / 2 - 20,
    // backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEE2E2',
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
