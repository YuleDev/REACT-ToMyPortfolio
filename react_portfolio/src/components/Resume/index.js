import React from 'react';
import pdfResume from '../../assets/koleResume.pdf';

function Resume() {
    return (
        <section class="text-center">

            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class="masthead mb-auto">
                    <div class="inner">
                        <h3 class="masthead-brand">The resume of our dearly beloved...<br></br> Kole Ervine</h3>
                        <nav class="nav nav-masthead justify-content-center">
                            <a class="nav-link active" href="https://www.linkedin.com/in/bullmoosedev/">Linkedin <i class="bi bi-linkedin"></i></a>
                            <a class="nav-link" href="https://github.com/BullMooseDev">Github <i class="bi bi-github"></i></a>
                            <a class="nav-link" href={pdfResume} download>Download Resume <i class="bi bi-file-earmark-pdf-fill"></i></a>
                        </nav>
                    </div>
                </header>

                <main role="main" class="inner cover">
                    <h1 class="cover-heading">Cover your page.</h1>
                    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p class="lead">
                        <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                </main>
            </div>
        </section>
    );
};

export default Resume;

/*         <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
        <script src="../../assets/js/vendor/popper.min.js"></script>
        <script src="../../dist/js/bootstrap.min.js"></script> */