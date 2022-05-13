import React from 'react';
import aboutImage from '../../assets/DoomWallpaper.jpg';

function About() {
    return (
        <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
            My name is Kole Ervine. I like solving problems and programming lets me do just that.
        </p>
      </div>
    </section>
    );
};

export default About;