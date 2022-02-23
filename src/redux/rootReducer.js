import { combineReducers } from "redux";

import homePageReducer from '../views/HomeModule/HomePage/modules/reducer';
import detailMovieReducer from '../views/HomeModule/DetailMoviePage/modules/reducer';

const rootReducer = combineReducers({
  //Child reducer
  homePageReducer,
  detailMovieReducer,
});

export default rootReducer;