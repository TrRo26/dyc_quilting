import React, { Component } from 'react'
import { TweenMax, Power2 } from "gsap"
import './info_expand.css'

class InfoExpand extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false
            // categoryName: "life",
            // component: <Life />
        }
    }

    // onMouseOverCat(category, comp) {
    //     var currentCat = this.state.categoryName
    //     if(category === null || category !== currentCat) {
    //         TweenMax.to("#" + currentCat, 3, {y: 0})
    //         this.setState({
    //             categoryName: category,
    //             component: comp
    //         })
    //         TweenMax.to("#" + category, 1, {y: -15})
    //         // TweenMax.fromTo(".category-name-display", 0.5, {css: {height: 0}}, {css: {height: 100}})
    //     }
    // }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <div className='info-collapsed'>T</div>
                        <div className='info-open title'><span className='info-headers'>Title: </span>{this.props.title}</div>
                    </div>
                    <div>
                        <div className='info-collapsed'>D</div>
                        <div className='info-open date'><span className='info-headers'>Date: </span>{this.props.date}</div>
                    </div>
                    <div>
                        <div className='info-collapsed'>D</div>
                        <div className='info-open description'><span className='info-headers'>Description: </span>{this.props.description}</div>
                    </div>            
                </div>
            </div> 
        )
    }
}

export default InfoExpand
