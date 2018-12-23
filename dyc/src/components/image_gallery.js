// import PropTypes from 'prop-types'
import React from 'react'
import QuiltCard from './quilt_card.js'

import Image1 from '../images/image_one.png'
import Image2 from '../images/image_two.png'
import Image3 from '../images/image_three.png'

const ImageGallery = () => (
    <div>

        <QuiltCard 
            title='Title One'
            date='12/23/2018'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            myimage={Image1}
        />
        <QuiltCard 
            title='Title Two'
            date='12/23/2018'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            myimage={Image2}
        />

        <QuiltCard 
            title='Title Three'
            date='12/23/2018'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            myimage={Image3}
        />
    </div>    
)

export default ImageGallery


/* <div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
    <img src={Image1}></img>
</div>
<div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
    <img src={Image2}></img>
</div>
<div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
    <img src={Image3}></img>
</div> */