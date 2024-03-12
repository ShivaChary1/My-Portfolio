import {React,useEffect,useRef} from 'react'
import ScrollReveal from 'scrollreveal'

function WorkItems({item}) {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  useEffect(()=>{
    ScrollReveal().reveal(ref1.current,{
      origin: "right",
      distance:"200px",
      duration:2000,
    })
    ScrollReveal().reveal(ref2.current,{
      origin: "left",
      distance:"200px",
      duration:2000,
    })
  },[])


  return (
    <div ref={(item.id)%2===0?ref1:ref2} className='work__card' key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems
