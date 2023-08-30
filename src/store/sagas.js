/**
 * sagas js
 *
 * it will have all the sagas combined
 *
 * For more function follow axios documentation
 *
 * Project: BluePrint
 *
 * Devlopers:
 * 1. Panorbit Services LLP
 */

import { takeEvery, takeLatest } from 'redux-saga/effects';

import { Types } from './actions';

import { getSlotDataSaga } from '../screen/parkingFloor/store/saga';
import { getParkingPlaceSaga } from '../screen/home/store/saga';
export function* watchAuth() {
  yield takeLatest(Types.GET_SLOT_DATA, getSlotDataSaga);
  yield takeEvery(Types.PARKING_PLACE, getParkingPlaceSaga);
}
