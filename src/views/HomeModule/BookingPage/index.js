import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { actFetchListTickets, actBookChair } from './modules/actions';
import _ from 'lodash';
import './style.css';

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
  width: 90%;
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

export default function BookingPageComponent(props) {
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
      let chairId = listBooking.findIndex(item => item.maGhe === chair.maGhe);
      if (chairId !== -1) {
        classBooking = 'chair-choosing'
      }
      return (
        <Fragment key={index}>
          <button
            disabled={chair.daDat}
            className={`chair ${classVip} ${classBooked} ${classBooking}`}
            onClick={() => { dispatch(actBookChair(chair)) }}
          >
            {chair.daDat ? 'X' : chair.stt}
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
          <PageWrapper className="">
            <div className="row" style={{ height: '100vh' }}>
              <div className="col-xl-8">
                <div className="mt-5" style={{ width: '100%', height: '15px', backgroundColor: 'black' }}></div>
                <Screen className="text-center mt-1">
                  <h5>Screen</h5>
                </Screen>
                <div className="text-center">
                  {renderSeats()}
                </div>
              </div>
              <div className="col-xl-4 d-flex flex-column justify-content-start py-5">
                <div>
                  <h3 className="text-center text-success">{listBooking.reduce((total,item) => total += item.giaVe,0).toLocaleString()} đ</h3>
                  <hr />
                  <h3>{movieInfo && movieInfo.tenPhim}</h3>
                  <p className="m-0"><b>Địa chỉ: {movieInfo && movieInfo.diaChi}</b></p>
                  <p className="m-0">
                    <b>Ngày chiếu: {movieInfo && movieInfo.ngayChieu} {movieInfo && movieInfo.gioChieu} {movieInfo && movieInfo.tenRap}</b>
                  </p>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-danger">Ghế:</p>
                    <p className="text-primary">{listBooking.reduce((total,item) => total += item.giaVe,0).toLocaleString()} đ</p>
                  </div>
                  <div className="pb-2">
                      {_.sortBy(listBooking,['maGhe']).map((item, index) => {
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
}
