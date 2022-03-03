import { combineReducers } from "redux";

import homePageReducer from '../views/HomeModule/HomePage/modules/reducer';
import detailMovieReducer from '../views/HomeModule/DetailMoviePage/modules/reducer';
import formModalReducer from '../views/FormModal/modules/reducer';
import bookingPageReducer from '../views/HomeModule/BookingPage/modules/reducer';

const rootReducer = combineReducers({
  //Child reducer
  homePageReducer,
  detailMovieReducer,
  formModalReducer,
  bookingPageReducer
});

export default rootReducer;