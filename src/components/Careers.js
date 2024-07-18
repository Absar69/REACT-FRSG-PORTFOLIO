import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import heroImage from '../assets/img/c4.jpg';
import softwareEngineerImage from '../assets/img/c1.jpg';
import dataScientistImage from '../assets/img/c2.jpg';
import projectManagerImage from '../assets/img/c3.jpg';

export const Careers = () => {
    return (
      <section className="careers">
        <div className="hero-section">
          <Image src={heroImage} fluid className="hero-image" />
          <div className="hero-text">
            <h1>Join Our Team</h1>
            <p className="intro-text">
              We are always on the lookout for talented and passionate individuals to join our team. If you are eager to work in a dynamic and innovative environment, check out our open positions and apply today.
            </p>
          </div>
        </div>
        <div className="intro-section">
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <h2>Current Openings</h2>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="job-listing">
                <Image src={softwareEngineerImage} fluid className="job-image" />
                <div className="job-details">
                  <h3>Software Engineer</h3>
                  <p>We are looking for a skilled software engineer with experience in React and Node.js.</p>
                </div>
              </div>
              <div className="job-listing">
                <Image src={dataScientistImage} fluid className="job-image" />
                <div className="job-details">
                  <h3>Data Scientist</h3>
                  <p>Join our data team to work on cutting-edge machine learning projects.</p>
                </div>
              </div>
              <div className="job-listing">
                <Image src={projectManagerImage} fluid className="job-image" />
                <div className="job-details">
                  <h3>Project Manager</h3>
                  <p>We need an experienced project manager to lead our development teams.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
