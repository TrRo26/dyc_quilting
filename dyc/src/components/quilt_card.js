// import PropTypes from 'prop-types'
import React from 'react'
// import Image1 from '../images/image_one.png'

const QuiltCard = (props) => (
    <div>
        <div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
            <img src={props.myimage}></img>
        </div>
        <div>
            <div>Title: {props.title}</div>
            <div>Date: {props.date}</div>
            <div>About: {props.description}</div>
        </div>
    </div>    
)

export default QuiltCard

/* <div>Title: {this.props.title}</div>
<div>Date: {this.props.quiltData.date}</div>
<div>About: {this.props.quiltData.description}</div> */