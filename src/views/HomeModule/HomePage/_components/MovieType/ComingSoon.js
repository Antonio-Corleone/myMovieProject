import React from 'react';
import Slider from "react-slick";

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
          background: "green",
          background: "#F08B23",
          borderRadius: '50%'
        }}
      onClick={onClick}
    />
  );
}

export default function NowShowingComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="col-md-12">
      <Slider {...settings}>
        <div className="px-2">
          <div className="card">
            <img 
              src="https://movienew.cybersoft.edu.vn/hinhanh/death-note_gp05.jpg" 
              alt="test" 
              style={{border: "2px solid green", borderRadius:'3px 3px 0 0'}}
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="card">
            <img src="https://movienew.cybersoft.edu.vn/hinhanh/the-longest-ride_gp05.jpg" alt="test" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="card">
            <img src="https://movienew.cybersoft.edu.vn/hinhanh/specter_gp05.jpg" alt="test" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="card">
            <img src="https://movienew.cybersoft.edu.vn/hinhanh/mat-biec_gp05.jpg" alt="test" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="card">
            <img src="https://movienew.cybersoft.edu.vn/hinhanh/ant-man_gp05.jpg" alt="test" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="card">
            <img src="https://movienew.cybersoft.edu.vn/hinhanh/ant-man_gp05.jpg" alt="test" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
  )
}
