import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { actFetchDataHomePage } from '../../HomeModule/HomePage/modules/actions';
import CarouselComponent from './_components/Carousel';
import MovieTypeComponent from './_components/MovieType';
import NewsComponent from './_components/News';
import ContactUsComponent from './_components/ContactUs';

export default function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDataHomePage());
  }, [dispatch]);
  
  return (
    <>
      <div className="bg-warning container-xl" style={{ height: '3px' }}></div>
      <CarouselComponent />
      <div className="bg-warning container-xl" style={{ height: '3px' }}></div>
      <MovieTypeComponent />
      <div className="pb-3 bg-light container-xl"></div>
      <NewsComponent />
      <div className="bg-warning container-xl" style={{ height: '3px' }}></div>
      <ContactUsComponent />
      <div className="bg-warning container-xl" style={{ height: '3px' }}></div>
    </>
  )
}
