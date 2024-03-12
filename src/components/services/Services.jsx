import React,{useState} from 'react'
import './servies.css'


function Services() {
    const [toggle,setToggle]=useState(0);
    const toggleTab = (idx) =>{
        setToggle(idx)
    }
    const [toggle1,setToggle1] = useState(0);
    const toggleTab1 =(idx)=>{
        setToggle1(idx)
    }
    const [toggle2,setToggle2] = useState(0);
    const toggleTab2 = (idx)=>{
        setToggle2(idx)
    }

  return (
    <section className="section services" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>


        <div className="services__container container grid" >
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br/> Designer</h3>
                    <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle?"services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quisquam incidunt est quae nobis, nostrum at eligendi, voluptatem deleniti accusantium ratione cum possimus? Qui quas nostrum perferendis recusandae, repudiandae eos.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developmet</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX elements.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developmet</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX elements.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content" >
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br /> Designer </h3>
                    <span className="services__button" onClick={()=>toggleTab1(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle1?"services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab1(0)}></i>
                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quisquam incidunt est quae nobis, nostrum at eligendi, voluptatem deleniti accusantium ratione cum possimus? Qui quas nostrum perferendis recusandae, repudiandae eos.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developmet</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX elements.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developmet</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX elements.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content" >
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                    <span className="services__button" onClick={()=>toggleTab2(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle2?"services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab2(0)}></i>
                            <h3 className="services__modal-title" >Visual Designer</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quisquam incidunt est quae nobis, nostrum at eligendi, voluptatem deleniti accusantium ratione cum possimus? Qui quas nostrum perferendis recusandae, repudiandae eos.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developmet</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX elements.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developmet</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX elements.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
