import React from "react"
import { assurance } from "../data/Data"

const AssuranceCard = () => {
  return (
    <>
      <div className='content1 grid5 mtop'>
        {assurance.map((items, index) => (
          <div className='box1' key={index}>
            <img src={items.image} alt='' />
            <label>{items.nom}</label><br/>
            <label>Services :</label> 
            <h6>{items.service}</h6><br/>
            <label>Description :</label>
            <h6>{items.description}</h6><br/>

          </div>
        ))}
      </div>

    </>
  )
}

export default AssuranceCard
