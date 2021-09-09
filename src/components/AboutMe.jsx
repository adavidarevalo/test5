import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
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
img{
    margin-top: 25px;
    
}
div{
    table, p{
        width: 80%;
        margin: 0 auto;
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
`

const AboutMe = () =>{
    return(
        <Container>
            <h2>About Me</h2>
            <StaticImage
                src="../images/person.png"
                width={1000}
                quality={95}
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
                <Link to='/'>Read More<AiOutlineArrowRight/></Link>
            </div>
        </Container>
    )
}

export default AboutMe