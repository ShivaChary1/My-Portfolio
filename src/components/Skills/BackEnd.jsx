import React from 'react'
import { useEffect,useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function BackEnd() {
    const ref = useRef(null);
    useEffect(()=>{
        ScrollReveal().reveal(ref.current,{
            origin:"right",
            distance:"100px",
            duration: 2000
        })
    })
  return (
    <div ref={ref} className='skills__content'>
        <h3 className="skills__title">Backend Developer</h3>


        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-nodejs"></i>
                    <div className="">
                        <h3 className="skills__name">Node JS</h3>
                        <span className="skills__level">Intermeditae</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-php"></i>
                    <div className="">
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxs-server"></i>
                    <div className="">
                        <h3 className="skills__name">Express JS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-python"></i>
                    <div className="">
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-mongodb"></i>
                    <div className="">
                        <h3 className="skills__name">Mongo DB</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-horizontal-left"></i>
                    <div className="">
                        <h3 className="skills__name">RESTful API</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackEnd
