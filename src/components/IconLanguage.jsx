import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
max-width: 450px ;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px !important;
min-height: 250px;
margin-inline: 50px;
h3{
    text-align: center;
    font-size: 1.8rem;
    margin: 0px 0px 10px 0px;
}
p{
    display: flex;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
}
img{
    width: 205px;
}
@media (min-width: 900px){
    width: 320px !important;
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    div{
        p{
          flex-direction: column;
        }
    }
}
`


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