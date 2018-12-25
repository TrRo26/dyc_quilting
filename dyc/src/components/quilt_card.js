import React, { Component } from 'react'
import './quilt_card.css'

class QuiltCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentElement: false,
            showElement: false
        };
    }

    handleHover = (element) => {
        this.setState({ showElement: true, currentElement: element });
    };
      
    handleLeave = () => {
        this.setState({ showElement: false, currentElement: false });
    };

    render() {
        return (
            <div className='all-container'>
                <div className='image-container'>
                    <img src={this.props.quiltImage}></img>
                </div>
                <div className='info-container'>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <p className='info-item-header' onMouseEnter={() => this.handleHover('title')}>Title</p>
                        <div className='info-item-full'>
                            { this.state.showElement && this.state.currentElement === 'title' && this.props.title }
                        </div>                            
                    </div>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <p className='info-item-header' onMouseEnter={() => this.handleHover('date')}>Date</p>
                        <div className='info-item-full'>
                            { this.state.showElement && this.state.currentElement === 'date' && this.props.date }
                        </div>
                    </div>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <p className='info-item-header' onMouseEnter={() => this.handleHover('about')}>About</p>
                        <div className='info-item-full'>
                            { this.state.showElement && this.state.currentElement === 'about' && this.props.about }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuiltCard
