import React from 'react';

function Footer() {
    return (
        <footer className='flex-row'>
            <nav>
                <ul className='flex-row'>
                    <li><a href='https://www.linkedin.com/in/bullmoosedev/'>LinkedIn <i class="bi bi-linkedin"></i></a></li>
                    <li><a href='https://github.com/BullMooseDev'>Github <i class="bi bi-github"></i></a></li>
                    <li><a href='mailto:koleervine@gmail.com'>Email Me! <i class="bi bi-envelope"></i> <i class="bi bi-arrow-right"></i> <i class="bi bi-mailbox"></i></a></li>
                </ul>
            </nav>
        </footer>
    );
};

/* maybe add small icons for each list item and what it does? */

export default Footer;