/**
 * reducers js
 *
 * it will have all the reducers will be combined
 *
 * For more function follow axios documentation
 *
 * Project: BluePrint
 *
 * Devlopers:
 * 1. Panorbit Services LLP
 */

import { combineReducers } from 'redux';
import { ParkingPlaceReducer } from '../screen/home/store/reducer';
import { slotReducer } from '../screen/parkingFloor/store/reducer';
const rootReducer = combineReducers({
  slot: slotReducer,
  ParkingPlace: ParkingPlaceReducer,
});
export default rootReducer;
