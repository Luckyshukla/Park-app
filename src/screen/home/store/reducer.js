import { createReducer } from 'reduxsauce';
import { Types } from './action';
const INITIAL_STATE = {
  parkingPlaceLoading: false,
  parkingPlaces: [],
};

const parkingPlaceStart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    parkingPlaceLoading: true,
  };
};
//
const parkingPlaceSuccess = (state = INITIAL_STATE, action) => {
  const { payload } = action.payload;

  return {
    ...state,
    parkingPlaceLoading: false,
    parkingPlaces: payload,
  };
};
const parkingPlaceFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    parkingPlaceLoading: false,
  };
};
const HANDLERS = {
  [Types.PARKING_PLACE_START]: parkingPlaceStart,
  [Types.PARKING_PLACE_SUCCESS]: parkingPlaceSuccess,
  [Types.PARKING_PLACE_FAILURE]: parkingPlaceFailure,
};

export const ParkingPlaceReducer = createReducer(INITIAL_STATE, HANDLERS);
