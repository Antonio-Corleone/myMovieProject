import * as actLoading from './constants';

const initialState = {
  loadingStatus: false,
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {

    case actLoading.ACTION_SHOW_LOADING:
      state.loadingStatus = true;
      return { ...state }
    case actLoading.ACTION_HIDE_LOADING:
      state.loadingStatus = false;
      return { ...state }

    default:
      return state
  }
}
export default loadingReducer;