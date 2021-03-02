import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: props.route.params.clubData,
      table: props.route.params.tableData,
    };
  }

  proceed = () => {
    //proceed
    // console.log('table select ...', this.state.table);
    this.props.navigation.navigate('Gnjoy', {
      params: {tableData: this.state.table, clubData: this.state.club},
      screen: 'Drinks',
    });
  };

  render() {
    // console.log('club', this.state.club);
    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.descContainer}>
          <Text style={styles.mainText}> Confirm your details and proceed</Text>
          {/* <Image
            style={styles.clubLogo}
            source={{uri: BaseUrl + this.state.data.logo}}
          /> */}
          <Text style={styles.cardText}>
            Thank you Jeff for choosing to party with us at{' '}
            {this.state.club.name}
          </Text>
          <Text style={styles.cardText}>
            You have selected the table {this.state.table.table_name}
          </Text>
          <Text style={styles.cardText}>
            Your table has {this.state.table.seats} seats
          </Text>
          <TouchableOpacity
            style={styles.chekinBtn}
            onPress={() => this.proceed()}>
            <Text style={styles.btnText}>PROCEED</Text>
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
  cardText: {
    // marginLeft: 10,
    fontWeight: 'normal',
    fontSize: 15,
    padding: 10,
    fontFamily: 'Tisa',
  },
  mainText: {
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'Tisa',
    color: 'black',
    padding: 7,
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
});

export default Select;
