import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.16:8000';

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: props.route.params.clubData,
      table: props.route.params.tableData,
      menu: [],
    };
  }

  componentDidMount() {
    console.log('club drink..', this.state.club);
    axios
      .get(
        `http://192.168.0.16:8000/club/searchfoodsmenu/${this.state.club.club_id}`,
      )
      .then((res) => {
        const menus = res.data;
        this.setState({menu: menus});
      })
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  }

  render() {
    // console.log('club', this.state.club);
    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.container}>
          <Text style={styles.headerMainText}>DRINKS MENUS</Text>
          {this.state.menu.map((data, index) => (
            <TouchableWithoutFeedback
              key={index}
              // onPress={() =>
              //   this.props.navigation.navigate('ClubInfo', {clubData: data})
              // }
            >
              <View>
                <ImageBackground
                  source={{uri: BaseUrl + data.photo}}
                  style={styles.card}
                  // resizeMode="cover"
                >
                  <View style={styles.child}>
                    <Text style={styles.descText}>{data.title}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          ))}
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
  container: {
    // backgroundColor: 'white',
    width: WIDTH - 40,
    // padding: 40,
    // height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  card: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    width: WIDTH - 40,
    height: 130,
    margin: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
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
  headerMainText: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Tisa',
    marginTop: 10,
    color: '#d92027',
  },
  descText: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Tisa',
    textAlign: 'justify',
    lineHeight: 30,
    color: 'white',
  },
});

export default Foods;
