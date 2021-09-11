import React from 'react'
import {Container} from '../styles/components/IconLanguage'


const IconLanguage = ({data}) => {
    const {name, nivel, image} = data
    console.log(nivel)
    return(
        <Container>
            <img src={image.url} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>Nivel: <img src={nivel.url}/></p>
            </div>
        </Container>
    )
}

export default IconLanguage