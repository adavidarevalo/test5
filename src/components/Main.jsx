import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"


const Container = styled.section`
min-height: 90.9vh;
background: rgb(69,16,138);
background: linear-gradient(90deg, rgba(69,16,138,1) 0%, rgba(61,6,95,1) 38%, rgba(32,5,84,1) 100%);
img{
  margin-top: 25px;
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
    width: 100%;
}
`

const Main = () => {
    return(
        <Container>
                <StaticImage
                  src="../images/sombras.png"
                  width={1000}
                  quality={95}
                  alt="Person and Computer"
                  />
            <div>
                <h2>David Arevalo</h2>
                <p>Front-End</p>
                <p>Developer</p>
            </div>

        </Container>
    )
}

export default Main