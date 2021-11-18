import React from 'react'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import aboutMe from '../images/aboutMe.png'
import '../styles/components/AboutMe.scss'

const AboutMe = () => {
    return(
        <section className='AboutMe-Container' id='AboutMe'>
            <img src={aboutMe} alt='Gatsby' data-aos='fade-right'/>
            <div className='Container' data-aos='fade-left'>
                <p className='AboutMe-Intro'>My intro</p>
                <h2>About Me</h2>
                <p>I am a Frontend Developer self-educated, from Ecuador and I am 21 years old, I like to learn new Technologies and work with teams of developers. I am studying Software Engineering at the University. My hobbies are creating web applications.</p>
                <div className='Table'>
                        <div>
                            <h3><AiOutlineUser/> Name:</h3>
                            <p>David Arevalo</p>
                        </div>
                        <div>
                            <h3><AiOutlinePhone/> Phone:</h3>
                            <p>(+593) 99 540 2222</p>
                        </div>
                        <div>
                            <h3><AiOutlineMail/> Email:</h3>
                            <p>davidarevaloc20@gmail.com</p>
                        </div>
                </div>
                <h3 className='Languages-Title'>Lenguages</h3>
                <table id='Services'>
                    <tr>
                        <td>English</td>
                        <td>Spanish</td>
                        <td>Portuguese</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default AboutMe