import React, {Component} from 'react'
import Disqus from 'disqus-react'
import './comments_modal.css'

class CommentsModal extends Component {

    render() {

        const disqusShortname = 'darleyclevenger';
        const disqusConfig = {
            url: this.props.disqusURL,
            identifier: this.props.quiltID,
        }
              
        return(
            <div className='comments-modal-container'>
                <div>
                    This is the comments modal for quilt ID {this.props.quiltID} and Disqus URL {this.props.disqusURL}.
                </div>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        )
    }
}

export default CommentsModal
