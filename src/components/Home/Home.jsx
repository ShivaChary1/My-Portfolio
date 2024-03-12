import React, { useRef,useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'


export default function Home() {
  const ref = useRef(null);
  useEffect(()=>{
    ScrollReveal().reveal(ref.current,{
      origin:'bottom',
      distance:'100px',
      duration:1000,
    });
  },[]);

  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
            <div ref={ref} className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data/>
            </div>

            <ScrollDown/>
        </div>
      </section>
    </div>
  )
}
