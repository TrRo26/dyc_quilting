import React from 'react'
import './quilt_card.css'

const QuiltCard = (props) => (
    <div className='all-container'>
        <div className='image-container'>
            <img src={props.myimage}></img>
        </div>
        <div className='info-container'>
            <div className='title'><span className='info-headers'>Title: </span>{props.title}</div>
            <div className='date'><span className='info-headers'>Date: </span>{props.date}</div>
            <div className='description'><span className='info-headers'>Description: </span>{props.description}</div>
        </div>
    </div>    
)

export default QuiltCard
