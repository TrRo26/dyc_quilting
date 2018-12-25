import React, { Component } from 'react'
import { TweenMax, Power2 } from "gsap"
import './info_expand.css'

class InfoExpand extends Component {

    constructor(props) {
        super(props)
        // this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            currentField: '',
            show: 'hidden'
        }
    }

    handleMouseHover(element) {
        // const currentElement = element
        this.setState({show: element})
        // this.setState(this.toggleHoverState)
    }  
    
    // toggleHoverState(state) {
    //     return {
    //         isHovering: !state.isHovering,
    //     }
    // }

    // onMouseOverCat(category, comp) {
    //     var currentCat = this.state.categoryName
    //     if(category === null || category !== currentCat) {
    //         TweenMax.to("#" + currentCat, 3, {y: 0})
    //         this.setState({
    //             categoryName: category,
    //             component: comp
    //         })
    //         TweenMax.to("#" + category, 1, {y: -15})
    //     }
    // }

    render() {
        // const displayOnHover = {
        //     display: (this.state.isHovering ? 'inline' : undefined)
        // }
        // const hideOnHover = {
        //     display: (this.state.isHovering ? 'none' : undefined)
        // }

        // const handleMouseEnter = () => this.setState({isHovering : true})
        // const handleMouseLeave = () => this.setState({isHovering : false})

        return(
            <div>
                {/* <div onMouseOver={this.handleMouseHover('title-show')}>
                    <div  className='info-headers'> T <span className={this.state.show}>itle</span></div>
                    <div className='info-full'><span className='info-headers'>Title: </span>{this.props.title}</div>
                </div> */}
                {/* <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <div className='info-headers'>D</div>
                    <div className='info-full'><span className='info-headers'>Date: </span>{this.props.date}</div>
                </div>
                <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <div className='info-headers'>D</div>
                    <div className='info-full'><span className='info-headers'>Description: </span>{this.props.description}</div>
                </div>             */}
            </div> 
        )
    }
}

export default InfoExpand
