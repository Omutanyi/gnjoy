/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.101:8000';

class Club extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      data: [],
    };
  }

  async componentDidMount() {
    axios
      .get('http://192.168.0.101:8000/club/')
      // .then(res => res.json())
      .then((res) => {
        const clubs = res.data;
        this.setState({data: clubs});
        // console.log('clubs...', clubs);
      })
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  }
  render() {
    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.headerView}>
          <Text style={styles.headerMainText}>CLUBS</Text>
          <Text style={styles.headerText}>Happy partying</Text>
          <Text style={styles.searchText}>
            Search for your club of choise below
          </Text>
          <TextInput
            placeholder="Search clubs"
            name="search"
            // value={this.state.searchTerm}
            // onChangeText={(text) => this.setState({searchTerm: text})}
            method="get"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.cardContainer}>
          {this.state.data.map((data, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() =>
                this.props.navigation.navigate('ClubInfo', {clubData: data})
              }>
              <View style={styles.clubCard}>
                <Image
                  style={styles.clubLogo}
                  source={{uri: BaseUrl + data.logo}}
                />
                <Text style={styles.cardHeadText}>{data.name}</Text>
                <Text style={styles.cardText}>{data.location}</Text>
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

  headerView: {
    width: WIDTH - 20,
    justifyContent: 'center',
    backgroundColor: '#d92027',
    // rgba(17,24,39,0.7)
    height: 200,
    marginTop: 30,
    position: 'relative',
    // flex: 1,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerMainText: {
    fontWeight: '600',
    fontSize: 30,
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
  searchText: {
    fontWeight: '300',
    fontSize: 12,
    fontFamily: 'Tisa',
    marginTop: 20,
    color: '#FEE2E2',
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
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  clubLogo: {
    width: '100%',
    height: 70,
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

export default Club;
