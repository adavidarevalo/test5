import React from 'react'
import person from "../images/person.png"
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "gatsby"
import {Container, ContainerDiv} from '../styles/components/AboutMe'
import LazyLoad from 'react-lazyload';


const AboutMe = ({LinkNo}) =>{
    return(
        <LazyLoad height={200} once >
        <Container>
            <h2>About Me</h2>
            <ContainerDiv>
            <img
                src={person}
                alt="Person and Computer"
                />
            <div>
                <p>I am Fronent Developer autodidact, I am from Ecuador and I have 21 years old, I like to learn new Tecnologies and work whit teams of developers. I am studing Software Engeenier in the University. My hobits is the Web development and I like to play Violin.</p>
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
                {!LinkNo && <Link to='/AboutMePage'>Read More<AiOutlineArrowRight/></Link>}
            </div>
          </ContainerDiv>
        </Container>
        </LazyLoad>
    )
}

export default AboutMe

