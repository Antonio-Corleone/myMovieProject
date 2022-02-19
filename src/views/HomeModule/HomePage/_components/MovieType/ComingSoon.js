import React from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F08B23",
        borderRadius: '50%'

      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F08B23",
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
}

export default function NowShowingComponent(props) {
  const dataListComing = useSelector(state => state.homePageReducer.dataListComing);
  const comingLoading = useSelector(state => state.homePageReducer.comingLoading);
  const settings = {
    dots: true,
    swipeToSlide: true,
    infinite: false,
    speed: 2000,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="row">
      {comingLoading
        ? <div>Loading...</div>
        :
        <div className="col-md-12">
          <Slider {...settings}>
            {dataListComing?.map((movie, index) => {
              return (
                <div className="px-2" key={index}>
                  <div className="card">
                    <img
                      src={movie.hinhAnh}
                      alt="test"
                      style={{
                        border: "2px solid green",
                        borderRadius: '3px 3px 0 0',
                        height: '350px'
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.tenPhim}</h5>
                      <Link className="btn btn-primary mx-2" to={`/detail-movie/${movie.maPhim}`}>View Details</Link>
                      <button className="btn btn-secondary mx-2">Book</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      }
    </div>
  )
}
