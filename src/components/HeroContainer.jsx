import React from 'react'

import hero1 from '../assets/images/hero1.jpg'
import HeroContent from './presentacionals/HeroContent'
import HeroImage from './presentacionals/HeroImage'

import './styles/HeroContainer.css'

const HeroContainer = () => {

    return (
        <section className="hero-container">
            <HeroImage image={hero1}/>
            <HeroContent className="hero-container__content"/>
        </section>
    )
}

export default HeroContainer
