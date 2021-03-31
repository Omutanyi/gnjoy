import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.101:8000';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.route.params.product,
      itemsCount: 1,
    };
  }

  addCount = () => {
    let itemsCount = this.state.itemsCount;
    var add = itemsCount + 1;
    this.setState({
      itemsCount: add,
    });
  };

  minusCount = () => {
    let itemsCount = this.state.itemsCount;

    if (itemsCount > 1) {
      var add = itemsCount - 1;
      this.setState({
        itemsCount: add,
      });
    }
  };

  addToCart = () => {
    // add product
    // add item count
  };

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.primaryView}>
          {/* <View style={styles.headerView}>
          <Text style={styles.headerMainText}>{this.state.product.name}</Text>
          <Text style={styles.headerText}>{this.state.product.location}</Text>
        </View> */}
          <View style={styles.descContainer}>
            <Image
              style={styles.clubLogo}
              source={{uri: BaseUrl + this.state.product.photo}}
            />
            <View style={styles.productHeader}>
              <Text style={styles.headerMainText}>
                {this.state.product.name}
              </Text>
              <Text style={styles.headerText}>
                KSH.
                {this.state.product.price}
              </Text>
            </View>
            <Text style={styles.descText}>
              {this.state.product.description}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.counter}>
            <Icon
              name="minus"
              size={20}
              color="#d92027"
              onPress={() => this.minusCount()}
            />
            <Text style={styles.counterText}>{this.state.itemsCount}</Text>
            <Icon
              name="plus"
              size={20}
              color="green"
              onPress={() => this.addCount()}
            />
          </View>
          <TouchableOpacity
            style={styles.addBtn}
            // onPress={() => this.checkinOptions()}
          >
            <Text style={styles.btnText}>
              {/* FEF2F2<Icon name="cart-plus" size={20} color="#FEF2F2" right={10} /> */}
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  primaryView: {
    flex: 0.8,
    backgroundColor: '#FEF2F2',
    marginBottom: 130,
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
    fontSize: 20,
    fontFamily: 'Tisa',
    marginTop: 0,
    color: '#d92027',
  },
  headerText: {
    fontWeight: '300',
    fontSize: 17,
    fontFamily: 'Tisa',
    marginTop: 5,
    color: 'green',
    opacity: 0.8,
  },

  descContainer: {
    width: WIDTH - 40,
    padding: 40,
    // paddingLeft: 40,
    // paddingRight: 40,
    // paddingBottom: 40,
    backgroundColor: 'white',
    marginTop: 40,
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
    marginTop: 10,
    textAlign: 'justify',
    lineHeight: 25,
    // color: '#FEE2E2',
  },

  clubLogo: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 130,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#FEE2E2',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  counter: {
    flexDirection: 'row',
  },
  counterText: {
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  addBtn: {
    backgroundColor: 'orange',
    width: WIDTH - 100,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
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
    color: 'white',
  },
});

export default Product;
