import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actFetchDataDetailMovie } from './modules/actions'

export default function DetailMoviePage(props) {
  const id = props.match.params.id;
  const data = useSelector(state => state.detailMovieReducer.data)
  const ImageMovie = styled.div`
  width: 100%;
  box-shadow: 0px 0px 50px 15px rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  z-index: 1; 
  position: relative;
  &::after{
    content: "";
    background-image:url(${data && data.hinhAnh});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(2px);
    position: absolute;
    top: -10%;
    left: -10%;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.5;
  }
`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDataDetailMovie(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="bg-warning" style={{ height: '3px' }}></div>
      <div className="container py-3">
        <h2 className='h2 border-bottom border-light pb-3 px-5'>Nội dung phim</h2>
        <div className="row">
          <div className="col-md-5 text-center">
            <ImageMovie className="mt-4">
              <img className='img-fluid' src={data && data.hinhAnh} alt={data && data.hinhAnh} />
            </ImageMovie>
          </div>
          <div className="col-md-7">
            <h2>{data && data.tenPhim}</h2>
            <p>{data && data.moTa}</p>
            <p>Điểm đánh giá: {data && data.danhGia}/10</p>
            <p>Ngày khởi chiếu: {new Date(data && data.ngayKhoiChieu).toLocaleDateString()}</p>
            <div className='btnDetail'>
              <button className="btn btn-success mr-3">ĐẶT VÉ</button>
              <button className="btn btn-danger">TRAILER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
