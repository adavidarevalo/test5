import { Link } from 'gatsby';
import React, {useState} from 'react'
import { AiFillFacebook,  AiFillGithub, AiFillMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {AsideDiv, Container, Arrow} from '../../styles/components/ContactAside'

const ContactAside = () => {
    const [Social, setSocial] = useState(false)
    const changeSocial = () => {
        setSocial(!Social)
    }
    return(
        <Container className={Social && 'Active'}>
        <AsideDiv>
            <div>
                <Link
                to='https://www.facebook.com/profile.php?id=100033936226415' 
                target='_blank'
                title='Facebook'
                ><AiFillFacebook/></Link>
            </div>
            <div>
                <a target="_blank" 
                 title='Gmail'
                 href='mailto:davidarevaloc20@gmail.com'>
                     <AiFillMail/>
                </a>
            </div>
            <div>
                <Link
                to='https://github.com/adavidarevalo' 
                target='_blank'
                title='Github'
                ><AiFillGithub/></Link>
            </div>
            <div>
                <Link
                to='https://www.linkedin.com/in/angel-arevalo' 
                target='_blank'
                title='Linkedin'
                ><AiFillLinkedin/></Link>
            </div>
            <div>
                <Link
                to='https://api.whatsapp.com/send?phone=+593995402222' 
                rel="nofollow ugc" 
                target='_blank'
                title='WhatsApp'
                ><AiOutlineWhatsApp/></Link>
            </div>
        </AsideDiv>
        <Arrow onClick={changeSocial}>
            {Social 
            ? <AiFillCaretLeft/>
            : <AiFillCaretRight/>          
            }
        </Arrow>
        </Container>
    )
}

export default ContactAside