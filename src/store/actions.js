/**
 * actions js
 *
 * it will have all the actions will be combined
 *
 * For more function follow axios documentation
 *
 * Project: BluePrint
 *
 * Devlopers:
 * 1. Panorbit Services LLP
 */

import {
  Types as getSlotType,
  Creators as getSlotCreators,
} from '../screen/parkingFloor/store/action';
import {
  Types as parkingPlaceType,
  Creators as parkingPlaceCreators,
} from '../screen/home/store/action';
const Types = {
  ...getSlotType,
  ...parkingPlaceType,
};
const Creators = {
  ...getSlotCreators,
  ...parkingPlaceCreators,
};
export { Types, Creators };
