import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Screen = styled.div`
  border-bottom: 30px solid rgba(0,0,0,0.2);
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 100%;
  filter: drop-shadow(5px 26px 25px #000);
`

export default function BookingPageComponent(props) {
  const userLogin = JSON.parse(localStorage.getItem("UserLogin")).content;
  console.log(userLogin);
  return (
    <>
      {
        localStorage.getItem("UserLogin")
          ?
          <div className="container-xl">
            <div className="row" style={{ height: '100vh' }}>
              <div className="col-md-8">
                <div className="mt-5" style={{ width: '100%', height: '10px', backgroundColor: 'black' }}></div>
                <Screen className="text-center">
                  <h5>Screen</h5>
                </Screen>
              </div>
              <div className="col-md-4 d-flex flex-column justify-content-between py-5">
                <div>
                  <h3 className="text-center text-success">0 đ</h3>
                  <hr />
                  <h3>Lật mặt 48h</h3>
                  <p>Địa điểm: BHD Star - Vincom 3/2</p>
                  <p>Ngày chiếu: 25/04/2021 12:05 Rạp 5</p>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-danger">Ghế</p>
                    <p className="text-primary">0 đ</p>
                  </div>
                  <div>
                    <i>Email</i><br />
                    {userLogin.email}
                  </div>
                  <hr />
                  <div>
                    <i>Phone</i><br />
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
          </div>
          : (<Redirect to={'/signin'} />)
      }
    </>
  )
}
