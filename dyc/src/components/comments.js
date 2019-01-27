import React, {Component} from 'react'
import CommentsForm from './comments_form.js'
import './comments.css'

class Comments extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <CommentsForm quiltId={this.props.quiltId}/>
                <div>
                    - Comments Thread Here -
                </div>
            </div>
        )
    }
}

export default Comments
