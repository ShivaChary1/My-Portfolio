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
            <a href="#services" className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className='footer__link'>Education</a>
          </li>
        </ul>

        <div className="footer__social">
            <a href="https://www.hackerrank.com/profile/22r01a66e8" target="_blank" className=" footer_icon_social footer__social-link" >HackerRank</a>

            <a href="https://leetcode.com/u/shivachary945/" className="footer_icon_social footer__social-link" target='_blank'>
              LeetCode
            </a>
            
            <a href="https://www.codechef.com/users/shivachary17" className="footer_icon_social footer__social-link" target='_blank'>
              CodeChef
            </a>

            <a href="https://codeforces.com/profile/shivachary_17" className="footer_icon_social footer__social-link" target='_blank'>
              CodeForces
            </a>
          </div>
          <span className='footer__copy'>
            &#169; ShivaChary. All rights reserved
          </span>
      </div>
    </footer>
  )
}

export default Footer
