//dependencies
import { call, put } from 'redux-saga/effects';
//constants
import { Creators } from './action';
import { ApiService } from '../../../service/apiService';
import { apiEndPoints } from '../../../service/endPoint';
// import { ObjectId } from 'bson';

export function* getParkingPlaceSaga(action) {
  try {
    yield put(Creators.parkingPlaceStart());
    const response = yield call(ApiService.get, apiEndPoints.parkigPlace, {});

    if (response.status >= 200 && response.status < 300) {
      yield put(Creators.parkingPlaceSuccess({ payload: response?.data }));
    } else {
    }
  } catch (err) {
    console.log(err);
    // const payload = ERROR_HANDLING(err);
    yield put(Creators.parkingPlaceFailure());
  }
}
