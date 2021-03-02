import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: props.route.params.clubData,
      tables: [],
      selectedId: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://192.168.0.16:8000/club/searchtable/${this.state.club.club_id}`,
      )
      .then((res) => {
        const tables = res.data;
        this.setState({tables: tables});
        // console.log('club tables...', tables);
      })
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  }

  selectTable = () => {
    // console.log('update table record')
    const id = this.state.selectedId;
    console.log('id..', id);
    // axios
    //   .put(`http://92.168.0.16:8000/club/${id}/`, {
    //     taken: true,
    //     // username: data.username,
    //   })
    //   .then(
    //     (response) =>
    //       console.log('put seller success. response:...', response.data.id),
    //     // this.props.navigation.navigate('AddLand'),
    //   )
    //   .catch((error) => {
    //     console.log('Error updating document', error.response);
    //   });
  };

  render() {
    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.container}>
          <Text style={styles.mainText}>Choose a table to proceed</Text>
          {this.state.tables.map((data, index) => {
            if (data.taken === true) {
              return (
                <TouchableWithoutFeedback key={index}>
                  <View style={styles.listContainer}>
                    <Text style={styles.cardText}>Table {data.table_name}</Text>
                    <Text style={styles.cardText}>
                      seat numbers {data.seats}
                    </Text>
                    <TouchableOpacity
                      style={styles.selectBtn}
                      // onPress={() => this.checkinOptions()}
                    >
                      <Text style={styles.occupiedText}>Occupied</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              );
            } else {
              return (
                <TouchableWithoutFeedback key={index}>
                  <View style={styles.listContainer}>
                    <Text style={styles.cardText}>
                      Table {data.table_name}{' '}
                    </Text>
                    <Text style={styles.cardText}>
                      seat numbers {data.seats}
                    </Text>
                    <TouchableOpacity
                      style={styles.selectBtn}
                      onPress={() =>
                        this.props.navigation.navigate('Select', {
                          tableData: data,
                          clubData: this.state.club,
                        })
                      }>
                      <Text style={styles.selectText}>Select Table</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              );
            }
          })}
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
  listContainer: {
    padding: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    alignItems: 'center',
    // left: 5,
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width: WIDTH - 60,
  },
  cardText: {
    fontWeight: 'normal',
    fontSize: 15,
    fontFamily: 'Tisa',
  },
  container: {
    backgroundColor: 'white',
    width: WIDTH - 40,
    padding: 40,
    // height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontWeight: '500',
    fontSize: 19,
    fontFamily: 'Tisa',
    color: 'black',
    padding: 15,
  },
  selectBtn: {
    left: 20,
  },
  occupiedText: {
    color: 'red',
  },
  selectText: {
    color: 'green',
  },
});

export default Table;
