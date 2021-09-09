import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import sombras from "../images/sombras.png"


const Container = styled.section`
min-height: 90.9vh;
background: rgb(69,16,138);
background: linear-gradient(90deg, rgba(69,16,138,1) 0%, rgba(61,6,95,1) 38%, rgba(32,5,84,1) 100%);
@media (min-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 93.7vh;
}
`
const ContainerDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
img{
  max-height: 530px;
  max-width: 530px;
  margin-top: 40px;
}
div{
    h2{
        font-size: 2.5rem;
        margin: 0px;
        color: white;
        text-decoration: underline;
        text-align: center;
        margin-top: 15px;
        opacity: .9;
    }
    p{
        font-size: 2rem;
        margin: 25px 0px 25px 0px;
        color: white;
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
        color: #ad78f3;
    }
    p:last-child{
        margin: 0px;
    }
}
img{
    width: 80%;
}
@media (min-width: 900px){
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    width: 80%;
    margin: 0 auto;
    max-width: 1400px;
  img{
    grid-column: 2;
    max-height: 800px;
    max-width: 800px;
    margin: 0 auto;
  }
  div{
        grid-row: 1;
        width: 300px;
  }
}
`

const Div = styled.div`
@media (min-width: 900px){
    display: flex;
    justify-content: end;
    width: 100% !important;
    height: 100%;
    align-items: center;
    div{
      p{
            margin-left: 50px;
      }
      p:last-child{
            margin-left: 125px;
      }
    }
}
`

const Main = () => {
    return(
        <Container>
          <ContainerDiv>
                <img
                  src={sombras}
                  alt="Person and Computer"
                  />
            <Div>
              <div>
                  <h2>David Arevalo</h2>
                <p>Front-End</p>
                <p>Developer</p>
              </div>
            </Div>
          </ContainerDiv>
        </Container>
    )
}

export default Main