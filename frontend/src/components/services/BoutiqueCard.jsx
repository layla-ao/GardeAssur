import React, { useState } from "react"
import { boutique } from "../data/Data"
import Form from "./Form"
const BoutiqueCard = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className='content1 grid5 mtop'>
        {boutique.map((items, index) => (
          <div className='box1' key={index}>
            <img src={items.image} alt='' />
            <h4>{items.couleur}</h4>
            <label>{items.ram} GB</label><br/>
            <label>{items.modele}</label><br/>
            <label>{items.prix} DT</label><br/>
            <label>{items.serie}</label><br/>
          
            <button className='btn2' onClick={() => setShowForm(true)}> Commander </button> 
          </div>
        ))}
      </div>
      {showForm && <Form />}
    </>
  )
}

export default BoutiqueCard
