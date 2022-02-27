import React from 'react';
import { useSelector } from 'react-redux';

export default function CarouselComponent(props) {
  const dataBanner = useSelector(state => state.homePageReducer.dataBanner);
  return (
    <div id="carouselId" className="carousel slide container-xl px-0" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselId" data-slide-to={0} className="active" />
        <li data-target="#carouselId" data-slide-to={1} />
        <li data-target="#carouselId" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img src={dataBanner&&dataBanner[0].hinhAnh} alt="First slide" width="100%" height="550px" />
        </div>
        <div className="carousel-item">
          <img src={dataBanner&&dataBanner[1].hinhAnh} alt="Second slide" width="100%" height="550px" />
        </div>
        <div className="carousel-item">
          <img src={dataBanner&&dataBanner[2].hinhAnh} alt="Third slide" width="100%" height="550px" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>

  )
}
