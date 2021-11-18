import React from 'react'
import designer from '../../images/designer.svg'
import frontend from '../../images/frontend.svg'
import seo from '../../images/seo.svg'
import { Container } from '../../styles/components/Abilities'
import LazyLoad from 'react-lazyload';

const AbilitiesContainer = [
    {
        image: designer,
        title: 'Designer',
        paragraph: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        abilities: 'UX, UI, Web, Logos',
    },
    {
        image: frontend,
        title: 'Front-end Developer',
        paragraph: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        abilities: 'Html, Css, Javascript, Sass, Less, Angular, React, Redux, Vue',
    },
    {
        image: seo,
        title: 'Performance and SEO',
        paragraph: 'I like to make your website fast, easy to find, and reach the widest audience possible.'
    }
]

const Abilities = () => {
    return(
        <LazyLoad height={50} once >
        <Container>
            <h2>Services</h2>
            <div className='Elemenet-Container'>
                {AbilitiesContainer.map(item => (
                    <div className='Element'>
                        <img src={item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>{item.paragraph}</p>
                        {
                            item.abilities && (
                                <div>
                                    <h4>Things I enjoy designing:</h4>
                                    <p>{item.abilities}</p>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </Container>
        </LazyLoad>
    )
}

export default Abilities