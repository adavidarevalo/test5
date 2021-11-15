import React from 'react'
import person from "../../images/person.png"
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "gatsby"
import { Container, ContainerDiv } from '../../styles/components/AboutMe'
import LazyLoad from 'react-lazyload';


const AboutMe = ({ LinkNo }) => {
  return (
    <LazyLoad height={100} once >
      <Container>
        <h2>About Me</h2>
        <ContainerDiv>
          <img
            src={person}
            alt="Person and Computer"
          />
          <div>
            <p>I am a Frontend Developer self-educated, from Ecuador and I am 21 years old, I like to learn new Technologies and work with teams of developers. I am studying Software Engineering at the University. My hobbies are creating web applications.</p>
            <table>
              <tr>
                <th>Languages</th>
                <th>Level</th>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </td>
              </tr>
              <tr>
                <td>English</td>
                <td>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar className='ColorGray' />
                </td>
              </tr>
              <tr>
                <td>Portuguese</td>
                <td>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </td>
              </tr>
            </table>
            {!LinkNo && <Link to='/AboutMePage'>Read More<AiOutlineArrowRight /></Link>}
          </div>
        </ContainerDiv>
      </Container>
    </LazyLoad>
  )
}

export default AboutMe

