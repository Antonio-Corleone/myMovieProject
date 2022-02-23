import * as actHomePage from './constants';

const initialState = {
  showingLoading: false,
  comingLoading: false,
  dataBanner: null,
  dataListShowing: null,
  dataListComing: null,
  error: null,
}

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actHomePage.BANNER_MOVIE_REQUEST: {
      state.dataBanner = null;
      state.error = null;
      return { ...state }
    }
    case actHomePage.BANNER_MOVIE_SUCCESS: {
      state.dataBanner = action.payload;
      state.error = null;
      return { ...state }
    }
    case actHomePage.BANNER_MOVIE_FAILED: {
      state.dataBanner = null;
      state.error = action.payload;
      return { ...state }
    }

    case actHomePage.LIST_SHOWING_REQUEST: {
      state.showingLoading = true;
      state.dataListShowing = null;
      state.error = null;
      return { ...state }
    }
    case actHomePage.LIST_SHOWING_SUCCESS: {
      state.showingLoading = false;
      state.dataListShowing = action.payload;
      state.error = null;
      return { ...state }
    }
    case actHomePage.LIST_SHOWING_FAILED: {
      state.showingLoading = false;
      state.dataListShowing = null;
      state.error = action.payload;
      return { ...state }
    }
    
    default:
      return { ...state }
  }
}

export default homePageReducer;
