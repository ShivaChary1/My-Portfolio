import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Shiva</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className='footer__link'>About</a>
          </li>
          <li>
            <a href="#protfolio" className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className='footer__link'>Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">
            <a href="" className="footer__social-link" target='-blank'><i className="bx bxl-twitter"></i></a>

            <a href="https://www.linkedin.com/in/shiva-chary-guddoju-867b93290/" className="footer__social-link" target='-blank'><i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/ShivaChary1" className="footer__social-link" target='-blank'><i className="uil uil-github-alt"></i></a>
          </div>
          <span className='footer__copy'>
            &#169; Crypticalcoder. All rights reserved
          </span>
      </div>
    </footer>
  )
}

export default Footer
