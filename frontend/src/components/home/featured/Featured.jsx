import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Types de Propriétés en Évidence' subtitle='Découvrez Toutes les Catégories de Biens.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
