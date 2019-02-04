import React, {Component} from 'react'
import './admin_quilt_mini.css'

class AdminQuiltMini extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className='quilt-mini-inner-container'>
                <div>QID: {this.props.quiltId}</div>
                <div>NEW COMMENTS: {this.props.newComments}</div>
                <div>Published Comments: {this.props.publishedComments}</div>
                <div>Total Comments: {this.props.totalComments}</div>
            </div>
        )
    }
}

export default AdminQuiltMini
