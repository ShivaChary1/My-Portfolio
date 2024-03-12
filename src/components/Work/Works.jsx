import React, { useEffect, useState } from 'react'
import { projectsNav,porjectData } from './Datap.jsx'
import WorkItems from './WorkItems.jsx'

function Works() {
  return (
    <>
    {/* <div className='work__filters'>
        {projectsNav.map((item,idx)=>{
            return (
                <span className="work__item" key={idx}>{item.name}</span>
            )
        })}
    </div> */}
    <div className="work__container container grid">
        {porjectData.map((item)=>{
            return <WorkItems item={item} key={item.id}/>
        })}
    </div>
    </>
  )
}

export default Works
