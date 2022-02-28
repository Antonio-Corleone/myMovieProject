import api from '../../../utils/apiUtils';
import * as actForm from './constants';

// Login actions
export const actLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post('QuanLyNguoiDung/DangNhap', user)
      .then(result => {
        localStorage.setItem("UserLogin", JSON.stringify(result.data));
        dispatch(actLoginSuccess(result.data.content))
        history.replace('/')
      })
      .catch((error) => {
        dispatch(actLoginFailed(error.response))
      })
  }
}

const actLoginRequest = () => ({
  type: actForm.LOGIN_REQUEST
});

const actLoginSuccess = (data) => ({
  type: actForm.LOGIN_SUCCESS,
  payload: data
});

const actLoginFailed = (error) => ({
  type: actForm.LOGIN_FAILED,
  payload: error
})

// Register actions
export const actRegister = (user, history) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());
    api
      .post('QuanLyNguoiDung/DangKy', user)
      .then(result => {
        dispatch(actRegisterSuccess(result.data.content))
        history.goBack();
      })
      .catch((error) => {
        dispatch(actRegisterFailed(error.response))
      })
  }
}

const actRegisterRequest = () => ({
  type: actForm.REGISTER_REQUEST
});

const actRegisterSuccess = (data) => ({
  type: actForm.REGISTER_SUCCESS,
  payload: data
});

const actRegisterFailed = (error) => ({
  type: actForm.REGISTER_FAILED,
  payload: error
})
