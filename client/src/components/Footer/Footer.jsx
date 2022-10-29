import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer(props) {
    return (
        <div className='display'>
            <div className='div'>
                <h1>About us</h1>
                <p className='par'>There are many blood donor groups / communities on various platforms, including social media. Where people of different professions are involved.

                But we went beyond that and thought that our varsity would have its own platform for blood donors with only Eastern family members are involved.

                We created this project in its continuity.</p>
            </div>
            <div className='div'>
                <h1>Useful Links</h1>
                <div><Link className='text' to='/Bloodrqst'>Blood Request</Link></div>
                <div><Link className='text' to='/whywe'>Why Donate</Link></div>
                <div><Link className='text' to='/hospital'>Hospital</Link></div>
                <div><Link className='text' to='/about'>About</Link></div>
                <div><Link className='text' to='/contact'>Contact</Link></div>
            </div>
            
        </div>
    );
}

export default Footer;