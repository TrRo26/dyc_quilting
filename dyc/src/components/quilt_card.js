import React from 'react'
import './quilt_card.css'
import InfoExpand from './info_expand.js'

const QuiltCard = (props) => (
    <div className='all-container'>
        <div className='image-container'>
            <img src={props.myimage}></img>
        </div>
        <div className='info-container'>
            <InfoExpand {...props} />
        </div>
    </div>    
)

export default QuiltCard
