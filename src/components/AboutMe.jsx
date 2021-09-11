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
                {!LinkNo && <Link to='/AboutMePage'>Read More<AiOutlineArrowRight/></Link>}
            </div>
          </ContainerDiv>
        </Container>
        </LazyLoad>
    )
}

export default AboutMe