import { combineReducers } from "redux";

import homePageReducer from '../views/HomeModule/HomePage/modules/reducer';
import detailMovieReducer from '../views/HomeModule/DetailMoviePage/modules/reducer';
import listMoviePageReducer from '../views/HomeModule/ListMoviePage/modules/reducer'
const rootReducer = combineReducers({
  //Child reducer
  homePageReducer,
  detailMovieReducer,
  listMoviePageReducer
});

export default rootReducer;