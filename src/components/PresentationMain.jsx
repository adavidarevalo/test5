import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import MyCv from '../fileDownload/MyCv.pdf'
import AnimationMain from './animationMain/AnimationMain'
import { Link } from "@reach/router";

const PresentationMain = () => {
    return(
        <section className='Presentation-Container'>
            <div
            data-aos='fade-left'
            className='AnimationElement'
            >
                <AnimationMain/>
            </div>
            <div 
            className='Presentation-Container_Details'
            data-aos='fade-right'>
                <p className='Presentation-Greeting'>Hi I am</p>
                <h3>David Arevalo</h3>
                <p>
                    <Typewriter
                      words={['Front - End Developer', 'Designer']}
                      cursor
                      loop={true}
                      cursorStyle='|'
                      typeSpeed={500}
                      delaySpeed={1500}
                    />
                </p>
                <p>I am a Developer, passionate about web technologies especially <span className='Tecnologies'>Angular, React and Vue</span>. With a hard-working spirit that never stops learning. I am in favor of creating intuitive, scalable and reliable code.</p>
                <div>
                    <a href={MyCv} download='David-Arevalo-Cv.pdf'>Download CV</a>
                    <Link to='#ContactMe'>Contact Me</Link>
                </div>
            </div>
        </section>
    )
}

export default PresentationMain