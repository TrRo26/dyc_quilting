import React, {Component} from 'react'
import './admin_quilt_view.css'

class AdminQuiltView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // quiltViewOn: true
        }
    }

    renderPubUnpubButton(status) {
        if(status) {
            return(<button className='button published-button'>Published</button>)
        } else {
            return(<button className='button unpublished-button'>Unpublished</button>)
        }
    }

    handleReturnButtonClick() {
        // this.setState({
        //     quiltViewOn: false
        // })
    }

    render() {

        var comments = this.props.quiltData.comments.map(comment => {
            return(
                <div className='quilt-comment-container'>
                    <div className='comment-text'>Comment: {comment.commentText}</div>
                    <div className='author'>Author: {comment.author}</div>
                    <div className='location'>Location: {comment.location}</div>
                    <div className='date'>Date: {comment.commentDate}</div>
                    <div className='pub-unpub-button-container'>
                        {this.renderPubUnpubButton(comment.published)}
                    </div>
                </div>
            )
        })

        return(
            <div className='quilt-moderation-container'>
                <button className='button return-button' onClick={this.handleReturnButtonClick}>RETURN TO QUILT MODERATION GALLERY</button>
                <div className='quilt-mod-title'>QUILT MODERATION</div>
                <div className='quilt-info-container'>
                    <div>Title: {this.props.quiltData.title}</div>
                    <div>About: {this.props.quiltData.about}</div>
                    <div>Dimensions: {this.props.quiltData.dimension}</div>
                    <div>Completed Date: {this.props.quiltData.completedDate}</div>
                    <div>Image URL: {this.props.quiltData.imageUrl}</div>
                </div>
                <div className='quilt-comments-container'>
                    <div>QUILT COMMENTS</div>
                    {comments}
                </div>
            </div>
        )
    }
}

export default AdminQuiltView
