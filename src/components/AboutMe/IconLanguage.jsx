import React from 'react'
import {Container} from '../../styles/components/IconLanguage'
import LazyLoad from 'react-lazyload';

const IconLanguage = ({data}) => {
    const {name, nivel, image} = data
    console.log(nivel)
    return(
        <Container>
            <LazyLoad height={200} once >
            <img src={image.url} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>Level: <img src={nivel.url} alt={name}/></p>
            </div>
            </LazyLoad>
        </Container>
    )
}

export default IconLanguage