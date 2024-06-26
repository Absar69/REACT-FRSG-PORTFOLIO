import React from 'react';
import './about.css';
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id='about' className='custom-section'>
      <h5 className='custom-text-light'>Get To Know</h5>
      <h2 className='custom-heading-2'>About Me</h2>
      <div className="container">
        {/* For lg screens */}
        <div className="d-none d-lg-flex align-items-center">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="about__me">
              <div className="about__me-image">
                <img src={require('../../assets/me.png')} alt="About Image" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about__content">
              <div className='row'>
                <div className='col-md-4'>
                  <article className='about__card'>
                    <FaAward className='about__icon' />
                    <h5 className='custom-text-light'>Experience</h5>
                    <small>3+ Years of Working</small>
                  </article>
                </div>
                <div className='col-md-4'>
                  <article className='about__card'>
                    <FaUsers className='about__icon' />
                    <h5 className='custom-text-light'>Clients/workforce</h5>
                    <small>300+ Worldwide</small>
                  </article>
                </div>
                <div className='col-md-4'>
                  <article className='about__card'>
                    <VscFolderLibrary className='about__icon' />
                    <h5 className='custom-text-light'>Projects</h5>
                    <small>80+ Completed</small>
                  </article>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.
              </p>
              <a href='#contact' className='custom-btn custom-btn-primary custom-link'>
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        {/* For md screens */}
        <div className="d-none d-md-block d-lg-none">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="about__me">
                <div className="about__me-image">
                  <img src={require('../../assets/me.png')} alt="About Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="about__content">
            <div className='row'>
              <div className='col-md-12 mt-3'>
                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5 className='custom-text-light'>Experience</h5>
                  <small>3+ Years of Working</small>
                </article>
              </div>
              <div className='col-md-12 mt-3'>
                <article className='about__card'>
                  <FaUsers className='about__icon' />
                  <h5 className='custom-text-light'>Clients/workforce</h5>
                  <small>300+ Worldwide</small>
                </article>
              </div>
              <div className='col-md-12 mt-3'>
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <h5 className='custom-text-light'>Projects</h5>
                  <small>80+ Completed</small>
                </article>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
              arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.
            </p>
            <a href='#contact' className='custom-btn custom-btn-primary custom-link'>
              Let's Talk
            </a>
          </div>
        </div>

        {/* For sm screens */}
        <div className="d-block d-md-none">
          <div className="row justify-content-center">
            <div className="col-sm-12 d-flex justify-content-center">
              <div className="about__me">
                <div className="about__me-image">
                  <img src={require('../../assets/me.png')} alt="About Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="about__content">
            <div className='row'>
              <div className='col-sm-12 mt-3'>
                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5 className='custom-text-light'>Experience</h5>
                  <small>3+ Years of Working</small>
                </article>
              </div>
              <div className='col-sm-12 mt-3'>
                <article className='about__card'>
                  <FaUsers className='about__icon' />
                  <h5 className='custom-text-light'>Clients/workforce</h5>
                  <small>300+ Worldwide</small>
                </article>
              </div>
              <div className='col-sm-12 mt-3'>
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <h5 className='custom-text-light'>Projects</h5>
                  <small>80+ Completed</small>
                </article>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
              arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.
            </p>
            <a href='#contact' className='custom-btn custom-btn-primary custom-link'>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
