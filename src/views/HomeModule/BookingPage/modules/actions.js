import * as actBook from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchListTickets = (showID) => {
  return (dispatch) => {
    dispatch(actListTicketRequest());
    api
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showID}`)
      .then(result=> {
        // console.log(result);
        dispatch(actListTicketSuccess(result.data.content))
      })
      .catch(error => {
        // console.log(error);
        dispatch(actListTicketFailed(error))
      })
  }
};

const actListTicketRequest = () => ({
  type: actBook.BOOKING_TICKET_REQUEST
});

const actListTicketSuccess = (data) => ({
  type: actBook.BOOKING_TICKET_SUCCESS,
  payload: data
});

const actListTicketFailed = (error) => ({
  type: actBook.BOOKING_TICKET_FAILED,
  payload: error
});

export const actBookChair = (chair) => ({
  type: actBook.BOOKING_TICKET_BOOK,
  payload:chair
})
