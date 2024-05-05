import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import BoutiqueCard from "./BoutiqueCard"
import "./boutique.css"

const Boutique = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Boutique' title='Consulter notre produit' cover={img} />
        <div className='boutique container'>
          <BoutiqueCard/>
      
        </div>
      </section>
    </>
  )
}

export default Boutique
