import React, { useState } from "react"
import { boutique } from "../data/Data"
import Form from "./Form"
const BoutiqueCard = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCommanderClick = (serie) => {
      setSelectedItem(serie);
      setShowForm(true);
    };
  return (
    <>
      <div className='content1 grid5 mtop'>
        {boutique.map((items, index) => (
          <div className='box1' key={index}>
            <img src={items.image} alt='' />
            <label>{items.modele}</label><br/>
            <label>{items.couleur}</label>
            <label>{items.ram} </label><br/>
            <label>{items.prix} DT</label><br/>
            <label>{items.serie}</label><br/>
          
            <button className='btn2' onClick={() => handleCommanderClick(items.serie)}> Commander </button> 
          </div>
        ))}
      </div>
      {showForm && <Form serialNumber={selectedItem} />}
    </>
  )
}

export default BoutiqueCard
