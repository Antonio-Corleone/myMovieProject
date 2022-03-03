import * as actBook from './constants';

const initialState = {
  loading: false,
  data: null,
  error: null,
  listChairs: [],
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
      state.date = null;
      state.error = action.payload;
      return { ...state }
    case actBook.BOOKING_TICKET_BOOK:
      const listUpdated = [...state.listChairs];
      let index = listUpdated.findIndex(item => item.maGhe === action.payload.maGhe)
      if (index !== -1) {
        listUpdated.splice(index, 1);
      }else {
        listUpdated.push(action.payload);
      }
      state.listChairs = listUpdated;
      return { ...state }
    default:
      return { ...state }
  }
}

export default bookingPageReducer;
