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
                    <li className='info-item' onMouseLeave={this.handleLeave}>
                        <p onMouseEnter={() => this.handleHover('title')}>Title</p>
                        { this.state.showElement && this.state.currentElement === 'title' && this.props.title }
                    </li>
                    <li className='info-item' onMouseLeave={this.handleLeave}>
                        <p onMouseEnter={() => this.handleHover('date')}>Date</p>
                        { this.state.showElement && this.state.currentElement === 'date' && this.props.date }
                    </li>
                    <li className='info-item'>
                        <p onMouseEnter={() => this.handleHover('description')}>Description</p>
                        { this.state.showElement && this.state.currentElement === 'description' && this.props.description }
                    </li>
                </div>
            </div>
        )
    }
}

export default QuiltCard
