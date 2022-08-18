import React from 'react';
import aboutImage from '../../assets/DoomWallpaper.jpg';

function About2() {
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


function About() {
  return (
    <section>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello World!</h1>
          <p>My name is Kole Ervine, I'm an avid outdoorsman, learner and extrovert. I work on elucidating the problems that go unnoticed, forging insights on otherwise veiled obstacles and creating unparalleled solutions to issues both small and great alike. Amazing code starts with amazing minds, and I wish to be among them whilst working to create the best experience one can have when browsing and exploring the web! 

When I'm not at my desk writing stupefying code or working with other formidable web-engineers, I can be found out and about in the breath-taking wild. When I'm out in the world, I'm either among the awe-inspiring beauty of nature or amongst the magnificent literature that has helped form the minds of those who became pinnacles of achievement in our combined histories.</p>
          <p><a class="btn btn-primary btn-lg" href="https://www.linkedin.com/in/bullmoosedev/" target="_blank" rel="noopener noreferrer" role="button">Learn more »</a></p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Past</h2>
            <p>I recently graduated from the University of Utah's full stack flex coding bootcamp. I learned things like React, Sql, noSql, graphQl, Node.js, Express.js, CSS, HTML and MongoDB. Im still quite inexperienced compared to others within the industry of IT, but I have a desire to learn and build with a team! </p>
            <p><a class="btn btn-secondary" href="https://www.credly.com/badges/fdf929a1-7cd9-42db-b776-feac15910450/public_url" target="_blank" rel="noopener noreferrer" role="button">See my Credly Badge here! »</a></p>
          </div>
          <div class="col-md-4">
            <h2>Present</h2>
            <p>Currently I'm looking for work and stil educating myself. Sources like CS50 from EdX, PluralSight, Udemy and TheOdinProject have been great resources as I continue to learn and grow.</p>
          </div>
          <div class="col-md-4">
            <h2>Future</h2>
            <p>I really like alot of the designs and ideas behind Web3. The blockchain and decentralized currencies are incredibly interesting and I would love to achieve the knowledge and capability of being able to code things of this nature!</p>
            <p><a class="btn btn-secondary" href="https://cosmos.network/" target="_blank" rel="noopener noreferrer" role="button">View a site I would love to code »</a></p>
          </div>
        </div>
      </div>

      </section>
  )
};

export default About;