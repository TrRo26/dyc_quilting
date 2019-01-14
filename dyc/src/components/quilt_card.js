import React, {Component} from 'react'
import InfoItemFull from './info_item_full.js'
import CommentsModal from './comments_modal.js'
import './quilt_card.css'

class QuiltCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentElement: false,
            showElement: false,
            showCommentsModal: false
        }
    }

    handleHover = (element) => {
        this.setState({showElement: true, currentElement: element})
    }
      
    handleLeave = () => {
        this.setState({showElement: false, currentElement: false})
    }

    handleClick = () => {
        this.setState(prevState => ({showCommentsModal: !prevState.showCommentsModal}))
    }

    render() {

        return (
            <div className='all-container'>
                <div className='image-container'>
                    <img src={this.props.quiltImage}></img>
                </div>
                <div className='info-container'>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <div className='info-item-header' onMouseEnter={() => this.handleHover('title')}>Title</div>  
                        <div className='info-item-full-container'>
                            {this.state.showElement && this.state.currentElement === 'title' && <InfoItemFull infoItem={this.props.title} />}
                        </div>
                    </div>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <p className='info-item-header' onMouseEnter={() => this.handleHover('date')}>Date</p>
                        <div className='info-item-full-container'>
                            {this.state.showElement && this.state.currentElement === 'date' && <InfoItemFull infoItem={this.props.date} />}
                        </div>
                    </div>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <p className='info-item-header' onMouseEnter={() => this.handleHover('size')}>Size</p>
                        <div className='info-item-full-container'>
                            {this.state.showElement && this.state.currentElement === 'size' && <InfoItemFull infoItem={this.props.size} />}
                        </div>
                    </div>
                    <div className='info-item' onMouseLeave={this.handleLeave}>
                        <p className='info-item-header' onMouseEnter={() => this.handleHover('about')}>About</p>
                        <div className='info-item-full-container'>
                            {this.state.showElement && this.state.currentElement === 'about' && <InfoItemFull infoItem={this.props.about} />}
                        </div>
                    </div>
                    <div className='info-item'>
                        <p className='info-item-header' onClick={() => this.handleClick()}>Comments</p>
                        <div className='info-item-full-container'>
                            {this.state.showCommentsModal && <CommentsModal quiltID={this.props.id} disqusURL={this.props.disqusURL} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuiltCard
