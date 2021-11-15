import React from 'react'
import { Link } from "gatsby"
import { AiFillFacebook,  AiFillGithub, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import {ContainerFooter, List} from '../../styles/components/Footer'

const Footer = () => {
    //year
    var date = new Date()
    var year = date.getFullYear();
    return(
        <ContainerFooter>
            <div>
                <List>
                    <ul className="NavLinks">
                        <li>
                          <Link to='#/'>Home</Link>
                          </li>
                        <li>
                          <Link to='/AboutMePage'>About Me</Link>
                        </li>
                        <li>
                          <Link to='/Portafolio'>Projects</Link>
                        </li>
                        <li>
                          <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                    <ul className="SocialContainer">
                        <li>
                            <Link to='https://www.facebook.com/profile.php?id=100033936226415' target='_blank'>
                              <AiFillFacebook/>
                            </Link>
                        </li>
                        <li>
                            <Link to='https://github.com/adavidarevalo' target='_blank'>
                              <AiFillGithub/>
                            </Link>
                        </li>
                        <li>
                            <a target="_blank" href='mailto:davidarevaloc20@gmail.com'>
                              <AiFillMail/>
                            </a>
                        </li>
                        <li>
                            <Link to="https://api.whatsapp.com/send?phone=+593995402222" rel="nofollow ugc" target="_blank">
                              <AiOutlineWhatsApp/>
                            </Link>
                        </li>
                    </ul>
                </List>
              <p>Copyright &#169; {year} created by: <a>David Arevalo</a></p>
            </div>
        </ContainerFooter>
    )
}

export default Footer

