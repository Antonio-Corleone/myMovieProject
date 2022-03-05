import * as actBook from './constants';

const initialState = {
  loading: false,
  data: null,
  userInfo: null,
  error: null,
  listChairs: [],
  tabActive: '1'
}

const bookingPageReducer = (state = initialState, action) => {
  switch (action.type) {

    case actBook.BOOKING_TICKET_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state }
    case actBook.BOOKING_TICKET_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state }
    case actBook.BOOKING_TICKET_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state }
    case actBook.BOOKING_TICKET_BOOK:
      const listUpdated = [...state.listChairs];
      let index = listUpdated.findIndex(item => item.maGhe === action.payload.maGhe)
      if (index !== -1) {
        listUpdated.splice(index, 1);
      } else {
        listUpdated.push(action.payload);
      }
      state.listChairs = listUpdated;
      return { ...state }

    case actBook.USER_INFO_REQUEST:
      state.loading = true;
      state.userInfo = null;
      state.error = null;
      return { ...state }
    case actBook.USER_INFO_SUCCESS:
      state.loading = false;
      state.userInfo = action.payload;
      state.error = null;
      return { ...state }
    case actBook.USER_INFO_FAILED:
      state.loading = false;
      state.userInfo = null;
      state.error = action.payload;
      return { ...state }
    case actBook.BOOKING_COMPLETE:
      state.listChairs = [];
      return { ...state }
    case actBook.CHANGE_TAB:
      state.tabActive = action.payload;
      return { ...state }
    default:
      return { ...state }
  }
}

export default bookingPageReducer;
