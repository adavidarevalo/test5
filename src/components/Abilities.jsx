import React from 'react'
import designer from './../images/designer.svg'
import frontend from './../images/frontend.svg'
import seo from './../images/seo.svg'

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
        <section className='Abilities-Container'>
            <p className='ChooseMe'>Specialized in</p>
            <h2>What I offer</h2>
            <div className='Elemenet-Container'>
                {AbilitiesContainer.map(item => (
                    <div 
                    className='Element' 
                    data-aos='fade-in'
                    key={item.title}
                    >
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
        </section>
    )
}

export default Abilities