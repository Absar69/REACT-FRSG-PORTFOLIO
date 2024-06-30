import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
  {
    avatar: AVTR2,
    name: 'Robert Downey',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
  {
    avatar: AVTR3,
    name: 'Bruce Wayne',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
  {
    avatar: AVTR4,
    name: 'Zendaya Lastname',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  }
]

function Testimonials() {
  return (
    <section id='testimonials' className='custom-section'>
      <h5 className='custom-text-light'>
        Review from Researchers
      </h5>
      <h2 className='custom-heading-2'>Testimonials</h2>
      <Swiper 
        className='container testimonials__container' 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Avatar' />
              </div>
              <h5 className='client__name custom-text-light'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
