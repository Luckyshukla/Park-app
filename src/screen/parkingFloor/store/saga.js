//dependencies
import { call, put } from 'redux-saga/effects';
//constants
import { Creators } from './action';
import { ApiService } from '../../../service/apiService';
import { apiEndPoints } from '../../../service/endPoint';
// import { ObjectId } from 'bson';

export function* getSlotDataSaga(action) {
  const {spaceID} = action.payload;
  try {
    yield put(Creators.getSlotDataStart());
    const response = yield call(ApiService.get, `${apiEndPoints.parkigPlace}/image=${spaceID}`, {
      // params: {
      //   image: 0,
      // },
    });
    if (response.status >= 200 && response.status < 300) {
      
      yield put(Creators.getSlotDataSuccess({ data: response?.data }));
    } else {
    }
  } catch (err) {
    // const payload = ERROR_HANDLING(err);
    yield put(Creators.getSlotDataFailure());
  }
}
