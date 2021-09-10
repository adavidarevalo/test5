import React from 'react'
import styled from '@emotion/styled'
import person from "../images/person.png"
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "gatsby"

const Container = styled.section`
margin-top: 25px;
h2{
    text-align: center;
    font-size: 2.5rem;
    text-decoration: underline;
    color: #3e3d3d;
}
`
const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    margin-top: 25px;
    width: 80%;
}
div{
    table, p{
        width: 80%;
        margin: 0 auto;
        font-family: 'Ubuntu', sans-serif;
    }
    p{
        margin-block: 25px;
    }
    a{
        margin-block: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 1.2rem;
        color: #3e3d3d;
        svg{
            margin-left: 10px;
        }
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

const AboutMe = ({LinkNo}) =>{
    return(
        <Container>
                        <h2>About Me</h2>
            <ContainerDiv>
            <img
                src={person}
                alt="Person and Computer"
                />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta itaque vero optio, ratione quibusdam cupiditate tenetur! Optio libero, velit exercitationem quidem molestias inventore itaque ut omnis dolorem consequatur maiores!</p>
                <table>
                    <tr>
                        <th>Languages</th>
                        <th>Nivel</th>
                    </tr>
                    <tr>
                        <td>Spanish</td>
                        <td>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar className='ColorGray'/>
                            <AiFillStar className='ColorGray'/>
                        </td>
                    </tr>
                    <tr>
                        <td>Portugues</td>
                        <td>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </td>
                    </tr>
                </table>
                {!LinkNo && <Link to='/'>Read More<AiOutlineArrowRight/></Link>}
            </div>
          </ContainerDiv>
        </Container>
    )
}

export default AboutMe