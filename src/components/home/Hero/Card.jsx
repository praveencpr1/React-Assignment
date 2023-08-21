import React from "react"
import { hero } from "../../assets/data/data"

export const Card = () => {
  return (
    <>
      <section className='cards'>
        {hero.map((item) => (
          <div className='card' key={item.id}>
            <div className='left'>
              <img src={item.cover} alt='' />
            </div>
            <div className='right'>
              <h1>{item.comp}</h1>
              <h4>{item.compo}</h4>
              <h1>{item.compoo}</h1>
              <h1>{item.name}</h1>
            {/* <p>{item.items} items</p>*/}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
