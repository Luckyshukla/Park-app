import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getSlotData: ['payload'],
  getSlotDataStart: ['payload'],
  getSlotDataSuccess: ['payload'],
  getSlotDataFailure: ['payload'],
});

export { Types, Creators };
