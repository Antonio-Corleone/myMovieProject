import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { Tabs } from 'antd';
import _ from 'lodash';
import Swal from 'sweetalert2';
import './style.css';

import { actFetchListTickets, actBookChair, actBookedTicket, actFetchUserInfo } from './modules/actions';

// Handle sweetalert2
const alertBooking = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    confirmButtonText: 'OK'
  })
}

const Screen = styled.div`
  border-bottom: 30px solid rgba(0,0,0,0.2);
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 100%;
  filter: drop-shadow(5px 26px 25px #000);
`;
const PageWrapper = styled.div`
  background-image: url(https://previews.123rf.com/images/hoperan/hoperan1008/hoperan100800015/7499545-elementos-del-tema-de-la-pel%C3%ADcula-hermoso-fondo-floral-.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  padding: 10px 20px;
  margin: auto;
  &::before{
    content: '';
    position: absolute;
    background-color: rgba(255, 255,255,0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
  }
  @media (max-width:1400px){
    width: 100%;
  }
`

function BookingPageComponent(props) {
  const showID = props.match.params.showid;
  const movieInfo = useSelector(state => state.bookingPageReducer.data?.thongTinPhim);
  const listChairs = useSelector(state => state.bookingPageReducer.data?.danhSachGhe);
  const listBooking = useSelector(state => state.bookingPageReducer.listChairs);
  const userLogin = JSON.parse(localStorage.getItem("UserLogin"))?.content;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListTickets(showID));
  }, [dispatch, showID]);

  const renderSeats = () => {
    return listChairs && listChairs.map((chair, index) => {
      let classVip = chair.loaiGhe === 'Vip' ? 'chair-vip' : '';
      let classBooked = chair.daDat === true ? 'chair-booked' : ''
      let classBooking = '';
      let classUserBook = '';
      let chairId = listBooking.findIndex(item => item.maGhe === chair.maGhe);
      if (userLogin.taiKhoan === chair.taiKhoanNguoiDat) {
        classUserBook = 'chair-user';
      }
      if (chairId !== -1) {
        classBooking = 'chair-choosing';
      }
      return (
        <Fragment key={index}>
          <button
            disabled={chair.daDat}
            className={`chair ${classVip} ${classBooked} ${classBooking} ${classUserBook}`}
            onClick={() => { dispatch(actBookChair(chair)) }}
          >
            {chair.daDat
              ? classUserBook !== ''
                ? <i className="fa fa-user" aria-hidden="true"></i>
                : 'X'
              : chair.stt
            }
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ''}
        </Fragment>
      )
    })
  }
  return (
    <>
      {
        localStorage.getItem("UserLogin")
          ?
          <PageWrapper>
            <div className="row">
              <div className="col-12 col-xl-8">
                <div className="mt-5" style={{ width: '100%', height: '15px', backgroundColor: 'black' }}></div>
                <Screen className="text-center mt-1">
                  <h5>Screen</h5>
                </Screen>
                <div className="text-center">
                  {renderSeats()}
                </div>
                <div className="row mt-3 pt-2 border-top">
                  <div className="col-4 col-md text-center border-bottom font-weight-bold">
                    Ghế chưa đặt <br />
                    <button className="chair"><i className="fa fa-check" aria-hidden="true"></i></button>
                  </div>
                  <div className="col-4 col-md text-center border-bottom font-weight-bold">
                    Ghế đang đặt <br />
                    <button className="chair chair-choosing"><i className="fa fa-check" aria-hidden="true"></i></button>
                  </div>
                  <div className="col-4 col-md text-center border-bottom font-weight-bold">
                    Ghế Vip <br />
                    <button className="chair chair-vip"><i className="fa fa-check" aria-hidden="true"></i></button>
                  </div>
                  <div className="col-4 col-md text-center border-bottom font-weight-bold">
                    Ghế đã đặt <br />
                    <button className="chair chair-booked"><i className="fa fa-check" aria-hidden="true"></i></button>
                  </div>
                  <div className="col-4 col-md text-center border-bottom font-weight-bold">
                    Ghế mình đặt <br />
                    <button className="chair chair-user"><i className="fa fa-check" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-start py-5 mx-auto">
                <div>
                  <h3 className="text-center text-success">{listBooking.reduce((total, item) => total += item.giaVe, 0).toLocaleString()} đ</h3>
                  <hr />
                  <h3>{movieInfo && movieInfo.tenPhim}</h3>
                  <p className="m-0"><b>Địa chỉ: {movieInfo && movieInfo.diaChi}</b></p>
                  <p className="m-0">
                    <b>Ngày chiếu: {movieInfo && movieInfo.ngayChieu} {movieInfo && movieInfo.gioChieu} {movieInfo && movieInfo.tenRap}</b>
                  </p>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-danger">Ghế:</p>
                    <p className="text-primary">{listBooking.reduce((total, item) => total += item.giaVe, 0).toLocaleString()} đ</p>
                  </div>
                  <div className="pb-2">
                    {_.sortBy(listBooking, ['maGhe']).map((item, index) => {
                      return (
                        <span
                          className="m-1 text-dark text-bold text-center"
                          key={index}
                          style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            width: '30px',
                            height: '30px',
                            lineHeight: '30px',
                            borderRadius: '50%'
                          }}
                        >
                          {item.stt}
                        </span>
                      )
                    })}
                  </div>
                  <div>
                    <b><i>Email</i></b><br />
                    {userLogin.email}
                  </div>
                  <hr />
                  <div>
                    <b><i>Phone</i></b><br />
                    {userLogin.soDT}
                  </div>
                  <hr />
                </div>
                <div
                  onClick={() => {
                    const listTicketBooked = {
                      "maLichChieu": 0,
                      "danhSachVe": []
                    };
                    listTicketBooked.maLichChieu = showID;
                    listTicketBooked.danhSachVe = listBooking;
                    if (_.isEmpty(listTicketBooked.danhSachVe)) {
                      alertBooking('info', 'Please select tickets')
                    } else {
                      dispatch(actBookedTicket(listTicketBooked, alertBooking))
                    }
                  }}
                  className="d-flex justify-content-center align-items-center mt-5"
                  style={{
                    backgroundColor: 'green',
                    width: '100%',
                    height: '50px',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <p className="m-0 p-0" style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFF' }}>Đặt vé</p>
                </div>
              </div>
            </div>
          </PageWrapper>
          : (<Redirect to={'/signin'} />)
      }
    </>
  )
};

function BookingHistoryComponent(props) {
  const BookingHistory = useSelector(state => state.bookingPageReducer.userInfo?.thongTinDatVe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchUserInfo());
  }, [dispatch]);
  return (
    <section>
      <div className="px-5 mx-auto">
        <div className="flex text-center">
          <h1 className="mb-4 text-primary font-weight-bold">Lịch sử đặt vé của bạn</h1>
          <p className="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae.</p>
        </div>
        <div className="row m-2">
          {BookingHistory && BookingHistory.map((item, index) => {
            return (
              <div className="col-12 col-lg-6 col-xl-4 my-3" key={index}>
                <div className="d-flex justify-content-start border p-3" style={{ borderRadius: '5px' }}>
                  <div>
                    <img
                      alt="team"
                      className="mr-4 rounded-circle"
                      src={item.hinhAnh}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <h6 className="m-0">{item.tenPhim}</h6>
                    <p className="m-0">
                      Mã vé: {item.maVe}
                    </p>
                    <p className="m-0">
                      Ngày đặt: {new Date(item.ngayDat).toLocaleDateString()} <br />
                      Giờ đặt: {new Date(item.ngayDat).toLocaleTimeString()}
                    </p>
                    <p className="m-0">Cụm rạp: {item.danhSachGhe[0].maHeThongRap} {item.danhSachGhe[0].maCumRap}</p>
                    <p className="m-0">
                      Số ghế:
                      {_.sortBy(item.danhSachGhe, ['maGhe']).map((chair, index) => {
                        return (
                          <span
                            className="mx-1 text-center"
                            key={index}
                            style={{
                              display: 'inline-block',
                              backgroundColor: 'rgba(0, 0, 0, 0.2)',
                              width: '30px',
                              height: '30px',
                              lineHeight: '30px',
                              borderRadius: '50%'
                            }}
                          >
                            {chair.tenGhe}
                          </span>
                        )
                      })}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

  )
}

export default function (props) {
  let tabActive = useSelector(state => state.bookingPageReducer.tabActive);
  const dispatch = useDispatch();
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" activeKey={`${tabActive}`} onChange={(key) => {
        dispatch({ type: '@bookingPage/CHANGE_TAB', payload: key })
      }}>
        <Tabs.TabPane tab="01 CHỌN GHẾ &#38; THANH TOÁN" key="1">
          <BookingPageComponent {...props} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <BookingHistoryComponent {...props} />
        </Tabs.TabPane>
      </Tabs>

    </div>

  )
} 