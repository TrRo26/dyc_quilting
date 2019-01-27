import React, {Component} from 'react'
import 'node-fetch'
import './comments_form.css'

const initialState = {
    commentText: '',
    author: '',
    location: '',
    email: '',
    quiltId: this.props.quiltId
}

class CommentsForm extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("STATE IS: ")
        console.log(this.state)
        fetch('http://localhost:3000/comment/post', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(response => {console.log(response)}, this.setState(initialState))
        .catch(err => console.log(err))
    }

    handleChange(event, field) {
        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="comment-submit-container">
                        <label>Leave a comment:</label>
                        <textarea name="commentInput" cols="70" rows="3" placeholder="Leave a comment here" onChange={event => this.handleChange(event, 'commentText')}></textarea>
                    </div>
                    <div className="author-submit-container">
                        <label>Name:</label>
                        <input name="authorInput" onChange={event => this.handleChange(event, 'author')}></input>
                    </div>
                    <div className="location-submit-container">
                        <label>Location:</label>
                        <input name="commentInput" onChange={event => this.handleChange(event, 'location')}></input>
                    </div>
                    <div className="email-submit-container">
                        <label>Email:</label>
                        <input name="commentInput" onChange={event => this.handleChange(event, 'email')}></input>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentsForm
