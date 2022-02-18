import React from 'react'

import CarouselComponent from './_components/Carousel';
import MovieTypeComponent from './_components/MovieType';
import NewsComponent from './_components/News';
import ContactUsComponent from './_components/ContactUs';
import FooterComponent from './_components/Footer';

export default function HomePage(props) {
  return (
    <>
      <CarouselComponent />
      <MovieTypeComponent />
      <div className="pb-3"></div>
      <NewsComponent />
      <div className="pb-3"></div>
      <ContactUsComponent />
      <FooterComponent />
    </>
  )
}
