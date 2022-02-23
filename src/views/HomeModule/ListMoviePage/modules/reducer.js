import * as actListMovie from './constants';

const initialState = {
  showingLoading: false,
  comingLoading: false,
  dataListShowing: null,
  dataListComing: null,
  error: null,
}

const listMoviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actListMovie.SHOWING_MOVIE_REQUEST:
      state.showingLoading = true;
      state.dataListShowing = null;
      state.error = null;
      return { ...state }

    case actListMovie.SHOWING_MOVIE_SUCCESS:
      state.showingLoading = false;
      state.dataListShowing = action.payload;
      state.error = null;
      return { ...state }

    case actListMovie.SHOWING_MOVIE_FAILED:
      state.showingLoading = false;
      state.dataListShowing = null;
      state.error = action.payload;
      return { ...state }

    case actListMovie.COMING_MOVIE_REQUEST:
      state.comingLoading = true;
      state.dataListComing = null;
      state.error = null;
      return { ...state }

    case actListMovie.COMING_MOVIE_SUCCESS:
      state.comingLoading = false;
      state.dataListComing = action.payload;
      state.error = null;
      return { ...state }

    case actListMovie.COMING_MOVIE_FAILED:
      state.comingLoading = false;
      state.dataListComing = null;
      state.error = action.payload;
      return { ...state }
      
    default:
      return { ...state }
  }
}

export default listMoviePageReducer;
