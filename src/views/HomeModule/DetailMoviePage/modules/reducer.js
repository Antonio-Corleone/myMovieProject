import * as actDetailMovie from './constants';

const initialState = {
  loading: false,
  data: null,
  showTime:null,
  error: null,
}

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actDetailMovie.SHOW_TIME_REQUEST: {
      state.loading = true;
      state.showTime = null;
      state.error = null;
      return { ...state }
    }
    case actDetailMovie.SHOW_TIME_SUCCESS: {
      state.loading = false;
      state.showTime = action.payload;
      state.error = null;
      return { ...state }
    }
    case actDetailMovie.SHOW_TIME_FAILED: {
      state.loading = false;
      state.showTime = null;
      state.error = action.payload;
      return { ...state }
    }

    default:
      return { ...state }
  }
}

export default detailMovieReducer
