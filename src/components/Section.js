import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SECTION</h1>
      <p>Text Here?</p>
      <div className='section-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Section;