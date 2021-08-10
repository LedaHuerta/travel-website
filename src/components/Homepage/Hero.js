import React from "react";

import '../../App.css';
import "./Hero.css";
import { Button } from '../UI/Button';

const Hero = () => {
  return (
    <section className="container__hero">
      <video src="../../assets/videos/video-2.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="box-btns__hero">
        <Button
          className="btn__hero"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn__hero"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
