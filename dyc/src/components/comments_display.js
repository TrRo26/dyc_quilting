import React, {Component} from 'react'

class CommentsDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        return(
            <div>
                <div>-------------------------------</div>
                <div>{this.props.commentText}</div>
                <div>Author: {this.props.author}</div>
                <div>Location: {this.props.location}</div>
                <div>Date: {this.props.date}</div>
                <div>-------------------------------</div>
            </div>
        )
    }
}

export default CommentsDisplay
