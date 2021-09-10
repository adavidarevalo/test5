import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    margin-top: 25px;
    width: 80%;
}
div{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    table{
        tr{
            td{
                svg{
                    color: yellow;
                }
                .ColorGray{
                    color: #676666 !important;
                }
            }
        }
    }
}
@media (min-width: 1300px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1300px;
    margin: 0 auto;
}
`

const MoreInformation = () => {
        return(
                <ContainerDiv>
                <img
                    src=''
                    alt="Person and Computer"
                    />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta itaque vero optio, ratione quibusdam cupiditate tenetur! Optio libero, velit exercitationem quidem molestias inventore itaque ut omnis dolorem consequatur maiores!</p>
                    <Link>Download my CV</Link>
                </div>
              </ContainerDiv>
        )
}
export default MoreInformation