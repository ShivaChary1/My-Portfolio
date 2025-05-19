import React,{useState} from 'react'
import './servies.css'


function Services() {
  return (
    <section className="section services" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My work</span>


        <div className="services__container container grid" >
            
            
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">MetaConnect<br/></h3>
                    <a href="https://github.com/ShivaChary1/the_metaApp_project" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>
            </div>

            <div className="services__content" >
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> Pneumo.Ai<br /></h3>
                       <a href="https://github.com/ShivaChary1/pneumo_ai" target='_blank'>
                            <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                       </a>
                    <br />
                    <a href="#home">
                        <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a> 
                </div>
            </div>
             


            <div className="services__content" >
                <div>
                    <i className="uil uil-cloud-moon-rain services__icon"></i>
                    <h3 className="services__title">GenAI <br /> ChatBot </h3>
                    <a href="https://github.com/ShivaChary1/chatbot_genAI" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                   
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    
                </div>
            </div>
<div className="services__content">
                <div>
                    <i style={{fontWeight:600}} className="uil bx bxl-airbnb services__icon"></i>
                    <h3 className="services__title">InnTuit <br/></h3>
                    
                    <a href="https://github.com/ShivaChary1/InnTuit" target='_blank'>
                        <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    <br />
                    <a href="#">
                        <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>
            </div>

            {/* <div className="services__content" >
                <div>
                    <i className="uil uil-stopwatch-slash services__icon"></i>
                    <h3 className="services__title">Stopwatch <br /> Web App</h3>
                    <a href="#" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    
                </div>
            </div> */}

            {/* <div className="services__content" >
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                    <a href="#" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>
            </div> */}
        </div>    
    </section>
  )
}

export default Services
