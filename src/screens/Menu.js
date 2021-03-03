/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';

//redux imports
import {connect} from 'react-redux';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.16:8000';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: props.route.params.menuData,
      menuItems: [],
    };
  }

  async componentDidMount() {
    axios
      .get(
        `http://192.168.0.16:8000/club/searchdrink/${this.state.mainMenu.drinks_menu_id}`,
      )
      // .then(res => res.json())
      .then((res) => {
        const items = res.data;
        this.setState({menuItems: items});
        // console.log('clubs...', clubs);
      })
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  }
  render() {
    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.cardContainer}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>{this.props.club.name}</Text>
            <Text style={styles.headerText}>{this.props.club.location}</Text>
            <Text style={styles.headerMainText}>
              {this.state.mainMenu.title}
            </Text>
          </View>
          {this.state.menuItems.map((data, index) => (
            <TouchableWithoutFeedback
              key={index}
              //   onPress={() =>
              //     this.props.navigation.navigate('ClubInfo', {clubData: data})
              //   }
            >
              <View style={styles.clubCard}>
                <Image
                  style={styles.clubLogo}
                  source={{uri: BaseUrl + data.photo}}
                />
                <Text style={styles.cardHeadText}>{data.name}</Text>
                <Text style={styles.cardText}>KSH. {data.price}</Text>
                <TouchableOpacity
                  style={styles.cartBtn}
                  // onPress={() => this.proceed()}
                >
                  <Text style={styles.btnText}>ADD TO CART</Text>
                </TouchableOpacity>
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
    width: WIDTH,
    justifyContent: 'center',
    backgroundColor: '#d92027',
    // rgba(17,24,39,0.7)
    height: 'auto',
    padding: 20,
    position: 'relative',
    // flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerText: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'Tisa',
    marginTop: 0,
    color: '#f4f7c5',
  },
  headerMainText: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Tisa',
    marginTop: 10,
    color: 'white',
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
    // padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  clubCard: {
    width: WIDTH / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    // marginTop: 20,
    padding: 10,
    // borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    alignItems: 'center',
    alignSelf: 'center',
  },
  clubLogo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  cardHeadText: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Tisa',
    // color: 'red',
  },
  cardText: {
    // marginLeft: 10,
    fontWeight: 'normal',
    fontSize: 12,
    fontFamily: 'Tisa',
    color: 'green',
  },
  cartBtn: {
    backgroundColor: 'orange',
    width: 'auto',
    height: 25,
    padding: 10,
    borderRadius: 0,
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    fontWeight: '500',
    fontSize: 13,
    bottom: 5,
    fontFamily: 'notoserif',
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  menu: state.drinksMenu.drinksMenu,
  club: state.club.club,
});

export default connect(mapStateToProps, {})(Menu);
