import React from 'react';

function Navigation(props) {
    // props go here?

    return (
        <header className='flex-row'>
            <h3>
                <a id='logoRedirect' href='/'>Kole Ervine</a>
            </h3>

            <nav>
                <ul className='flex-row'>
                    <li>
                        <a onClick={() => {props.changeFunction('About')}}>About me</a>
                    </li>
                    <li>
                        <a onClick={() => {props.changeFunction('Projects')}}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => {props.changeFunction('Biography')}}>Biography</a>
                    </li>
                    <li>
                        <a onClick={() => {props.changeFunction('Contact')}}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;