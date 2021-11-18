import React from 'react'
import { AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import '../styles/components/AsideSocial.scss'

const AsideSocial = () => {
    return(
        <section className='AsideSocial'>
            <div>
                <a 
                href='https://www.facebook.com/profile.php?id=100033936226415' 
                target='_blank'
                ><AiOutlineFacebook/></a>
                <a 
                href="https://api.whatsapp.com/send?phone=+593995402222" 
                rel="nofollow ugc" 
                target="_blank"
                ><AiOutlineWhatsApp/></a>
                <a 
                target="_blank" 
                href='mailto:davidarevaloc20@gmail.com'
                ><AiOutlineMail/></a>
                <a 
                href='https://www.linkedin.com/in/angel-arevalo' 
                target='_blank'
                ><AiOutlineLinkedin/></a>
                <a 
                href='https://github.com/adavidarevalo' 
                target='_blank'
                ><AiFillGithub/></a>
            </div>
        </section>
    )
}

export default AsideSocial