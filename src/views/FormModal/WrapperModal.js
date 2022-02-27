import React from 'react';
import styled from 'styled-components'

const ModalWrap = styled.div`
  width: 35%;
  margin: auto;
  position: 'relative';
  }
  @media (max-width:1399px){
    width: 45%;
  }
  @media (max-width:1199px){
    width: 55%;
  }
  @media (max-width:991px){
    width: 70%;
  }
  @media (max-width:767px){
    width: 85%;
  }
  @media (max-width:575px){
    width: 95%;
  }
`

export default function WrapperModal(Component) {
  return function () {
    return (
      <div
        className="container-fluid m-auto px-0"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/2314983.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="pt-5" style={{ height: '100vh', }}>
          <ModalWrap className="py-5">
            <Component />
          </ModalWrap>
        </div>
      </div>
    )
  }
}
