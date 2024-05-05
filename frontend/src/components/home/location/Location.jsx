import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explorez par Location' subtitle='Trouvez Votre Assurance Idéale, Explorez Nos Options de Localisation.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Tél}</label><br/>
                    <label>{item.Email}</label><br/>
                    <label>{item.Location}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
