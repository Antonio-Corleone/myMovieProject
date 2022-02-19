import React from 'react'

import CarouselComponent from './_components/Carousel';
import MovieTypeComponent from './_components/MovieType';
import NewsComponent from './_components/News';
import ContactUsComponent from './_components/ContactUs';

export default function HomePage(props) {
  return (
    <>
      <div className="bg-warning" style={{ height: '3px' }}></div>
      <CarouselComponent />
      <div className="bg-warning" style={{ height: '3px' }}></div>
      <MovieTypeComponent />
      <div className="pb-3 bg-light"></div>
      <NewsComponent />
      <div className="bg-warning" style={{ height: '3px' }}></div>
      <ContactUsComponent />
      <div className="bg-warning" style={{ height: '3px' }}></div>
    </>
  )
}
