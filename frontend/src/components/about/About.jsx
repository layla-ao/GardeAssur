import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Garde Assurance History' subtitle='Découvrez notre histoire et notre processus de travail' />

            <p>Bienvenue sur notre plateforme dédiée à la gestion efficace des réclamations et à la vente de produits avec contrat d'assurance. Notre mission est de simplifier et d'améliorer le processus de gestion des réclamations tout en offrant une solution intégrée pour la vente de produits assortis de contrats d'assurance. </p>
            <p>
            Grâce à notre plateforme, vous pouvez non seulement gérer efficacement vos réclamations, mais également vendre des produits avec un contrat d'assurance en toute simplicité. Notre engagement envers la simplicité, la transparence et la qualité vous garantit une expérience utilisateur exceptionnelle à chaque étape.
              </p>
              <p className='btn2'>Rejoignez-nous dès aujourd'hui, pour vous et votre entreprise.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
