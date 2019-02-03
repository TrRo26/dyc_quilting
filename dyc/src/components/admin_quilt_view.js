import React, {Component} from 'react'

class AdminQuiltView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiltViewOn: true
        }
    }

    renderPubUnpubButton(status) {
        if(status) {
            return(<button>Unpublish</button>)
        } else {
            return(<button>Publish</button>)
        }
    }

    handleReturnButtonClick() {
        this.setState({
            quiltViewOn: false
        })
    }

    render() {

        var comments = this.props.quiltData.comments.map(comment => {
            return(
                <div>
                    <div>Comment Text: {comment.commentText}</div>
                    <div>Author: {comment.author}</div>
                    <div>Location: {comment.location}</div>
                    <div>Comment Date: {comment.commentDate}</div>
                    {this.renderPubUnpubButton(comment.published)}
                </div>
            )
        })

        return(
            <div>
                <button onClick={this.handleReturnButtonClick}>RETURN TO QUILT MODERATION GALLERY</button>
                <div>QUILT MODERATION</div>
                <div>
                    <div>Title: {this.props.quiltData.title}</div>
                    <div>About: {this.props.quiltData.about}</div>
                    <div>Dimensions: {this.props.quiltData.dimension}</div>
                    <div>Completed Date: {this.props.quiltData.completedDate}</div>
                    <div>Image URL: {this.props.quiltData.imageUrl}</div>
                </div>
                <div>
                    <div>QUILT COMMENTS</div>
                    {comments}
                </div>
            </div>
        )
    }
}

export default AdminQuiltView
