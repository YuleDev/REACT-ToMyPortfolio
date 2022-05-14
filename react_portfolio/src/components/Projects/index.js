import React from 'react';
import aboutImage from '../../assets/DoomWallpaper.jpg';

function Projects() {
  return (
    <section>
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Koles Projects</h1>
          <p class="lead text-muted">This is a brief display of some of the projects I have worked on over the course of my coding bootcamp. I have added my own personal touch to all of these and wanted to learn the most I could about their respective technologies. If youre interested in seeing more please visit my github, where you can see all of my current and past projects!</p>
          <p>
            <a href="https://www.linkedin.com/in/bullmoosedev/" class="btn btn-primary my-2">LinkedIn <i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/BullMooseDev" class="btn btn-secondary my-2">Github <i class="bi bi-github"></i></a>
          </p>
        </div>
      </section>

      <div class="d-flex flex-wrap album py-5 bg-light">
        <div class="container">
          <div class="flex-row flex-wrap">
            <div class="col-md-4" flex-wrap>
              <div class="card mb-4 box-shadow">
                <img src={aboutImage} class="card-img-top" alt="Thumbnail of project image[100%x225]" />
                <div class="card-body">
                  <p class="card-text">This is the title and description of a project.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href='link to project application'><button type="button" class="btn btn-sm btn-outline-secondary">View App</button></a>
                      <a href="link to github code page"><button type="button" class="btn btn-sm btn-outline-secondary">View Code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;