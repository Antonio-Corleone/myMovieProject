import { combineReducers } from "redux";

import homePageReducer from '../views/HomeModule/HomePage/modules/reducer';
const rootReducer = combineReducers({
  //Child reducer
  homePageReducer
});

export default rootReducer;