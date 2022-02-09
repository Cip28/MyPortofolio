import React from 'react';
import './sass/Footer.scss';


export default function Footer (){
    return (
        <footer>
            <section>
                <article className='footer-heads'>
                    <h2>Ciprian Barbu</h2>
                    <h2>Social</h2>
                </article>
                <article className='footer-mid'>
                    <p>21 years old student in Cybernetics</p>
                    <div className='social-icons'>
                        <a href='https://github.com/Cip28'><i className="fab fa-github"></i></a>
                        <a href='https://linkedin.com/in/ciprian-barbu-7bbbb820a'><i className="fab fa-linkedin"></i></a>
                        <a href='https://instagram.com/cip.barbu/'><i className="fab fa-instagram"></i></a>
                    </div>
                </article>
            </section>
            <section className='footer-foots'>
                <p>&copy; Copyright 2022. Made by <span> Ciprian Barbu</span>, inspired by <br/> Dopefolio, CodeMyUI, Hype4 Academy</p>
            </section>
        </footer>
    );
};

// export default Footer;
