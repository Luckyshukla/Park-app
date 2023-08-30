import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  parkingPlace: ['payload'],
  parkingPlaceStart: ['payload'],
  parkingPlaceSuccess: ['payload'],
  parkingPlaceFailure: ['payload'],
});

export { Types, Creators };
