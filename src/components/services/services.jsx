import React from 'react'
import './services.css'
import { FaCheckDouble } from "react-icons/fa6";

function  services  ()  {
  return (
    <section id='services' className='custom-section'>
      <h5 className='custom-text-light'> What We Offer</h5>
      <h2 className='custom-heading-2'>
        Services
      </h2>
      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>
              Service 1
            </h3>
          </div>
          
          <ul className='service__list'>
   
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
           
           {/* END OF SERVICE */}


          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>
              Service 2
            </h3>
          </div>
          <ul className='service__list'>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
           
           {/* END OF SERVICE */}


          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>
              Service 3
            </h3>
          </div>
          <ul className='service__list'>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
            <li>
            <FaCheckDouble className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </li>
           
           {/* END OF SERVICE */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services