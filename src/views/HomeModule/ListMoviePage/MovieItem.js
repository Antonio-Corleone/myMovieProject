import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const WrapperMovie = styled.div`
  @media (max-width:575px) {
    width: 65%!important;
    margin: 20px auto !important;
  }
  @media (max-width:400px) {
    width: 85%!important;
    margin: 20px auto !important;
  }
`
export default function MovieItem(props) {
  const { movie } = props
  return (
    <>
      <WrapperMovie className="card my-3">
        <img
          className="card-img-top"
          src={movie.hinhAnh}
          alt={movie.biDanh}
          style={{
            border: "2px solid green",
            borderRadius: '3px 3px 0 0',
            height: '350px'
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.tenPhim}</h5>
          <p className="card-text"><span className="text-primary">Đánh giá: </span>{movie.danhGia}/10</p>
          <p className="card-text"><span className="text-primary">Ngày khởi chiếu: </span>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</p>
          <p className="card-text"><span className="text-primary">Giờ khởi chiếu: </span>{new Date(movie.ngayKhoiChieu).toLocaleTimeString()}</p>
        </div>
        <div className="card-footer text-center">
          <Link className="btn btn-success" to={`/detail-movie/${movie.maPhim}`}>View Details</Link>
        </div>
      </WrapperMovie>

    </>
  )
}
