import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Location from '../../assets/icons/location.svg';
import BackArrow from '../../assets/icons/BackArrow.svg';
import VehicleType from '../../components/vehicleType/VehicleType';
import { Fonts } from '../../constants/fonts.android';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Creators } from './store/action';
import { rootNavigate } from '../../navigation/Navigation';

const vehicleType = ['Car', 'Bike', 'Truck', 'Bicycle'];
const RentalCard = ({ parkingData }) => (
  <TouchableOpacity
    onPress={() => {
      const payload ={
        id:parkingData?.image,
      }
      rootNavigate('ParkingFloor', 'push',payload)
    }}
  >
    <View style={styles.cardContainer}>
      <View style={styles.imgContainer}></View>
      <View style={styles.parkingDetails}>
        <View>
          <Text style={styles.parkinNameView}>{parkingData.place_name}</Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.interMedium,
              color: '#154698',
            }}
          >
            {parkingData.location || 'Vittal Mallya Rd'}
          </Text>
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <Progress.Bar progress={0.3} width={150} height={10} color={'#154698'} borderRadius={15}/>
          </View>
        </View>

        <View style={styles.rentalPriceContainer}>
          <View style={styles.currancySymbol}>
            <Text style={styles.symbolTex}>₹</Text>
          </View>
          <View style={styles.rentalPrice}>
            <Text style={styles.rentalPriceRatio}>
              {parkingData.currentRate || '6'}&nbsp;/&#160;hour
            </Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Creators.parkingPlace({}));
  }, []);

  const { parkingPlaces } = useSelector((state) => state.ParkingPlace);

  //   {
  //     id: 1,
  //     parkinName: 'U B city',
  //     location: 'Vittal Mallya Rd',
  //     currentRate: 6,
  //     totalSlot: 250,
  //     availablePSlot: 22,
  //   },
  //   {
  //     id: 2,
  //     parkinName: 'U B city',
  //     location: 'Vittal Mallya Rd',
  //     currentRate: 6,
  //     totalSlot: 250,
  //     availablePSlot: 22,
  //   },
  //   {
  //     id: 3,
  //     parkinName: 'U B city',
  //     location: 'Vittal Mallya Rd',
  //     currentRate: 6,
  //     totalSlot: 250,
  //     availablePSlot: 22,
  //   },
  //   {
  //     id: 4,
  //     parkinName: 'U B city',
  //     location: 'Vittal Mallya Rd',
  //     currentRate: 6,
  //     totalSlot: 250,
  //     availablePSlot: 22,
  //   },
  // ];
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View
          style={{
            height: 50,
            paddingHorizontal: 20,
            marginTop: 20,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <View style={styles.notificationContainer}>
            <View style={styles.locationContainer}>
              <View style={styles.location}>
                <View>
                  <Text
                    style={{
                      fontFamily: Fonts.interBlack,
                      color: '#fff',
                      fontSize: 15,
                    }}
                  >
                    Your Location
                  </Text>
                </View>

                <View style={{ transform: [{ rotate: '90deg' }] }}>
                  <BackArrow width={20} height={15} />
                </View>
              </View>

              <View style={styles.locationTextContainer}>
                <View style={styles.locationPin}>
                  <Location width={20} height={20} />
                </View>

                <View>
                  <Text
                    style={{ fontFamily: Fonts.interSemiBold, color: '#fff' }}
                  >
                    Bangalore, India
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerView}>
          <View
            style={{
              flex: 1.5,
              // marginLeft: ,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View>
              <View>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 35,
                    // marginTop: 20,
                    fontFamily: Fonts.interBold,
                  }}
                >
                  Find your parking here
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#ebeaf3',
            height: '70%',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
        >
          <View>
            <TextInput
              style={{
                height: 45,
                backgroundColor: '#fafaf9',
                borderRadius: 15,
                marginLeft: 25,
                marginRight: 25,
                marginTop: 25,
                paddingLeft: 20,
   
              }}
              placeholderTextColor="#414141"
              placeholder="Search Sapace"
            />

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 25,
                width: '100%',
              }}
            >
              {vehicleType.map((type, index) => {
                return <VehicleType type={type} key={index} />;
              })}
            </View>
            <View style={{ marginLeft: 25, marginVertical: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: Fonts.interExtraBold,
                  color: '#414141',
                }}
              >
                Nearby Space
              </Text>
            </View>
            <FlatList
              data={parkingPlaces}
              renderItem={({ item }) => <RentalCard parkingData={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    backgroundColor: '#154698',
  },
  headerView: {
    display: 'flex',
    height: '30%',
    flex: 1,
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: '#faf9f9',
    height: 130,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  imgContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#d3e7f8',
    borderRadius: 25,
    margin: 10,
  },
  parkingDetails: {
    display: 'flex',
    flex: 2,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  parkinNameView: {
    fontSize: 18,
    fontFamily: Fonts.interMedium,
    color: '#414141',
  },
  rentalPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currancySymbol: {
    backgroundColor: '#e3dfff',
    width: 25,
    height: 25,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolTex: {
    textAlign: 'center',
    color:'#154698',
    fontFamily: Fonts.interExtraBold,
  },
  rentalPrice: {
    paddingLeft: 10,
    fontFamily: Fonts.interMedium,
  },
  rentalPriceRatio: {
    fontSize: 18,
    color:'#414141',
    fontFamily: Fonts.interMedium,
  },
  notificationContainer: {},
  locationContainer: {
    height: '100%',
    justifyContent: 'space-around',
  },
  location: {
    display: 'flex',
    flexDirection: 'row',

    gap: 5,
  },
  locationPin: {},
  locationTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
