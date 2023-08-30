import { createReducer } from 'reduxsauce';
import { Types } from './action';
const INITIAL_STATE = {
  slotLoading: false,
  slotData: [],
};

const getSlotDataStart = (state = INITIAL_STATE, action) => {
  // const {
  //   payload: { gameType, levelArea },
  // } = action;
  return {
    ...state,
    slotLoading: true,

  };
};
const getSlotDataSuccess = (state = INITIAL_STATE, action) => {
  const { data } = action.payload;

  return {
    ...state,
    slotLoading: false,
    slotData: data,
  };
};
const getSlotDataFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    slotLoading: false,
  };
};

const HANDLERS = {
  [Types.GET_SLOT_DATA_START]: getSlotDataStart,
  [Types.GET_SLOT_DATA_SUCCESS]: getSlotDataSuccess,
  [Types.GET_SLOT_DATA_FAILURE]: getSlotDataFailure,
};

export const slotReducer = createReducer(INITIAL_STATE, HANDLERS);
