import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "./assurance.css"
import AssuranceCard from "./AssuranceCard"

const Assurance = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Boutique' title='Consulter notre produit' cover={img} />
        <div className='boutique container'>
          <AssuranceCard/>
      
        </div>
      </section>
    </>
  )
}

export default Assurance
