import React from "react"
import sombras from "../images/sombras.png"
import {Div, Type, ContainerDiv, Container} from '../styles/components/Main'

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
                  <Type>David Arevalo</Type>
                <p>Front-End</p>
                <p>Developer</p>
              </div>
            </Div>
          </ContainerDiv>
        </Container>
    )
}

export default Main