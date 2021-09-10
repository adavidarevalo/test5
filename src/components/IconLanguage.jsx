import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
width: 450px !important;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px !important;
min-height: 250px;
h3{
    text-align: center;
    font-size: 1.8rem;
    margin: 0px 0px 10px 0px;
}
img{
    width: 205px;
}
@media (min-width: 900px){
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    div{
        flex-direction: column;
    }
}
`


const IconLanguage = ({data}) => {
    console.log(data)
    const {name, nivel, image} = data
    return(
        <Container>
            <img src={image.url} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>Nivel: <span>{nivel}</span></p>
            </div>
        </Container>
    )
}

export default IconLanguage