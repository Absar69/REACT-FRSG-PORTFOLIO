import React from 'react';
import './ideology.css';
import { BsFillPatchCheckFill } from "react-icons/bs";

function ideology() {
  return (
    <section id='ideology' className='custom-section'>
      <h5 className='custom-text-light'>The ideology and the Technology Used</h5>
      <h2 className='custom-heading-2'>DUMMY DATA SKILLS</h2>
      <div className="container ideology__container">
        <div className="ideology__col1">
          <h3>COLUMN 1</h3>
          <div className="ideology__content">
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon' />
            <div>
            <h4>ABC</h4>
              <small className='text-light'>60%</small>
            </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
             <div>
             <h4>DEF</h4>
              <small className='text-light'>60%</small>
             </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'  />
            <div>
            <h4>GHI</h4>
              <small className='text-light'>60%</small>
            </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
             <div>
             <h4>KLM</h4>
              <small className='text-light'>60%</small>
             </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'>60%</small>
             </div>
            </article>
          </div>
        </div>

        <div className="ideology__col2">
          <h3>COLUMN 2</h3>
          <div className="ideology__content">
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>60%</small>
              </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>10%</small>
              </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>10%</small>
             </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>30%</small>
              </div>
            </article>
            <article className='ideology__details'>
              <BsFillPatchCheckFill className='ideology__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>60%</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ideology;