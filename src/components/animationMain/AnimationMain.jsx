import React from 'react'
import './Animation.scss'
import Cuerpo from "./Cuerpo.svg" 
import cabeza from './cabeza.svg'
import road from './road.svg'
import css from './css.svg'
import arrow from './arrow.svg'

const AnimationMain = () => {
    return(
    <div className="Animation">
        <img src={Cuerpo} alt="Cuerpo" className="Body-Animation"/>
        <img src={cabeza} alt="Cabeza" className="Head-Animation"/>
        <img src={road} alt="Road" className="Road"/>
        <img src={css} alt="css" className="css"/>
        <img src={arrow} alt="Arrow" className="Arrow"/>
      </div>
    )
}

export default AnimationMain