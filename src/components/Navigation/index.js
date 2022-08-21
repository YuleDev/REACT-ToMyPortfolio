import React from 'react';
import pdfResume from '../../assets/koleResume.pdf';

function Navigation(props) {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" onClick={() => { props.changeFunction('About') }}>Kole Ervine</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => { props.changeFunction('About') }}>About me<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => {props.changeFunction('Projects')}}>Projects<span class="sr-only">(current)</span></a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" onClick={() => {props.changeFunction('Resume')}}>Resume<span class="sr-only">(current)</span></a>
                    </li> */}

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contact Links
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="https://www.linkedin.com/in/bullmoosedev/">LinkedIn <i class="bi bi-linkedin"></i></a>
                            <a class="dropdown-item" href="https://github.com/BullMooseDev">Github <i class="bi bi-github"></i></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href='mailto:koleervine@gmail.com'>Email me! <i class="bi bi-envelope"></i> <i class="bi bi-arrow-right"></i> <i class="bi bi-mailbox"></i></a>
                            <a class="nav-link" href={pdfResume} download>Download Resume <i class="bi bi-file-earmark-pdf-fill"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;