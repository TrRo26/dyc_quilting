import React, {Component} from 'react'
import './comments_modal.css'

class CommentsModal extends Component {
    render() {
        return(
            <div className='comments-modal-container'>
                This is the comments modal for quilt ID {this.props.quiltID}.
            </div>
        )
    }
}

export default CommentsModal
