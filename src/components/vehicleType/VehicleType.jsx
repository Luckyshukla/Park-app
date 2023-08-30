import { View, Text,   } from 'react-native';
import { Fonts } from '../../constants/fonts.android';

const VehicleType =({type})=>{
    return(
        <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      backgroundColor: '#e1e2f7',
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderColor: '#fffeff',
                      borderWidth: 4,
                    }}></View>
                  <View
                    style={{
                      display: 'flex',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily:Fonts.interSemiBold,
                        paddingTop: 10,
                        color:'#414141',
                      }}>
                     {type}
                    </Text>
                  </View>
                </View>
              </View>
    )
}
export default VehicleType;