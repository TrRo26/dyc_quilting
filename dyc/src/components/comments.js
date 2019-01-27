import React, {Component} from 'react'
import CommentsForm from './comments_form.js'
import CommentsDisplay from './comments_display.js'
import './comments.css'

class Comments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentCommentsData: [],
            commentsLoaded: false
        }
    }

    getComments() {
        if (this.state.commentsLoaded === false) {
            fetch('http://localhost:3000/comments/' + this.props.quiltId, {
                method: 'GET',
                // headers: {"Content-Type": "application/json"}
            }
            ).then(response => response.json()
            ).then(data => {
                this.setState({
                    currentCommentsData: data,
                    commentsLoaded: true
                })
            }).catch(err => console.log(err))
        }
    }

    render() {
        this.getComments()
        // console.log(this.state.currentCommentsData)
        const commentsDisplay = this.state.currentCommentsData.map(comment => {
            return(
                <CommentsDisplay 
                    commentText={comment.comment_text}
                    author={comment.author}
                    location={comment.location}
                />
            )
        })

        return(
            <div>
                <CommentsForm quiltId={this.props.quiltId}/>
                <div>
                    {commentsDisplay}
                </div>
            </div>
        )
    }
}

export default Comments
