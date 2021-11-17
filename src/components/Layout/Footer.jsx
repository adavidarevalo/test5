import React from 'react'
import wave from '../../images/wave.svg'
import { AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return(
        <footer>
            <img src={wave} alt='wave' className='wave'/>
            <section>
                <div className='Social-Container'>
                    <div>
                        <a
                        href='https://www.facebook.com/profile.php?id=100033936226415' 
                        target='_blank'
                        ><AiOutlineFacebook/></a>
                    </div>
                    <div>
                        <a
                        href="https://api.whatsapp.com/send?phone=+593995402222" 
                        rel="nofollow ugc" 
                        target="_blank"
                        ><AiOutlineWhatsApp/></a>
                    </div>
                    <div>
                        <a
                        target="_blank" 
                        href='mailto:davidarevaloc20@gmail.com'
                        ><AiOutlineMail/></a>
                    </div>
                    <div>
                        <a
                        href='https://github.com/adavidarevalo' 
                        target='_blank'
                        ><AiFillGithub/></a>
                    </div>
                </div>
                <p>Created by: <span>David Arevalo</span></p>
            </section>
        </footer>
    )
}

export default Footer