import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Fonts } from '../../constants/fonts.android';
import BackArrow from '../../assets/icons/BackArrow.svg';
import Car from '../../assets/icons/Car.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Creators } from './store/action';
import { rootNavigate } from '../../navigation/Navigation';

const parkingSlot = [
  {
    Row: 1,
    rowSlotStatus: [
      { slot: false },
      { key: 2, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 3, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 4, availbale: true, cordinate: [0, 1], slot: true },
    ],
  },
  {
    Row: 2,
    rowSlotStatus: [
      { key: 1, availbale: true, cordinate: [0, 1], slot: true },
      { key: 2, availbale: true, cordinate: [0, 1], slot: true },
      { key: 3, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 4, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 3, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 4, availbale: true, cordinate: [0, 1], slot: true },
    ],
  },
  {
    Row: 3,
    rowSlotStatus: [
      { slot: false },
      { key: 2, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 3, availbale: true, cordinate: [0, 1], slot: true },
      // { key: 4, availbale: true, cordinate: [0, 1], slot: true },
    ],
  },
];
const ParkingFloor = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Creators.getSlotData({ spaceID: id }));
  }, [id]);

  const { slotData } = useSelector((state) => state.slot);
useEffect(()=>{
  console.log(slotData);
},[slotData])
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          backgroundColor: '#ebeaf3',
          position: 'relative',
        }}
      >
        <View
          style={{
            height: 80,
            // backgroundColor: 'green',
            marginHorizontal: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => rootNavigate('', 'back', null)}
          >
            <View
              style={{
                transform: [{ rotate: '180deg' }],
                backgroundColor: '#154698',
                borderRadius: 10,
                height: 35,
                width: 35,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BackArrow width={20} height={15} />
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              display: 'flex',

              justifyContent: 'center',
              width: '85%',
            }}
          >
            <Text
              style={{
                // color: '#fff',
                textAlign: 'center',

                fontFamily: Fonts.interExtraBold,
                fontSize: 25,
              }}
            >
              Choose Slot
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            {slotData?.map((rowData) => {
              return (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                    overflow: 'scroll',
                  }}
                >
                  {rowData?.rowSlotStatus?.map((value) => {
                    return (
                      <View
                        style={{
                          // visibility: value?.slot ? "flex" : "hidden",
                          // opacity: value?.slot ? 0 : 1,

                          // backgroundColor:'green',
                          marginBottom: 10,
                          marginRight: 10,
                          // visibility: value?.slot ? 'flex' : 'hidden',
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            width: 150,
                            height: 100,
                            // backgroundColor:'red'
                            borderColor: '#154698',
                            borderWidth: 1,
                            borderRadius: 10,
                            borderStyle: 'dashed',
                          }}
                        >
                          {value?.status === 'busy' && <Car />}
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            height: 40,
            backgroundColor: '#154698',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            position: 'absolute',
            bottom: 15,
            width: '88%',
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontFamily: Fonts.interMedium,
            }}
          >
            Book Slot
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ParkingFloor;
