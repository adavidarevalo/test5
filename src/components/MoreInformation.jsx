import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"
import PersonWithComputer from "../images/PersonWithComputer.png"

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
max-width: 1300px;
margin: 0 auto;
p{
    margin-block: 25px;
    font-family: 'Ubuntu', sans-serif;
}
a{
    background: #5f27bd;
    color: white;
    width: 280px;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
}
`

const MoreInformation = () => {
        return(
                <ContainerDiv>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta itaque vero optio, ratione quibusdam cupiditate tenetur! Optio libero, velit exercitationem quidem molestias inventore itaque ut omnis dolorem consequatur maiores!</p>
                    <Link>Download my CV</Link>
              </ContainerDiv>
        )
}
export default MoreInformation