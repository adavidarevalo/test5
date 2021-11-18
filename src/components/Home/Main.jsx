import React from "react"
import wave from "../../images/wave.svg"
import {Div, ContainerDiv, Container, TypeContainer} from '../../styles/components/Main'
import { Typewriter } from 'react-simple-typewriter'

const Main = () => {
    return(
        <Container>
          <ContainerDiv>
                <img
                  src={wave}
                  alt="Person and Computer"
                  />
            <Div>
              <div>
                  <TypeContainer>
                    <Typewriter
                      words={['David Arevalo']}
                      cursor
                      cursorStyle='|'
                      typeSpeed={400}
                    />
                  </TypeContainer>
                <p>Front - End</p>
                <p>Developer</p>
              </div>
            </Div>
          </ContainerDiv>
        </Container>
    )
}

export default Main