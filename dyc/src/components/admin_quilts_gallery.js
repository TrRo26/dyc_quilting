import React, {Component} from 'react'
import './admin_quilts_gallery.css'
import AdminQuiltMini from './admin_quilt_mini'
import AdminQuiltView from './admin_quilt_view'

class AdminQuiltsGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allQuiltsAndComments: [],
            quiltsAndCommentsLoaded: false,
            indQuiltView: false,
            currentIndQuilt: 0
        }
        // this.handleQuiltMiniClick = this.handleQuiltMiniClick.bind(this)
    }

    fetchAllQuiltComments() {
        if(this.state.quiltsAndCommentsLoaded === false) {
            fetch('http://localhost:3000/quilts_and_comments/', {
                method: 'GET'
            }).then(response => response.json()
            ).then(data => {
                this.setState({
                    allQuiltsAndComments: this.buildQuiltCommentLibrary(data),
                    quiltsAndCommentsLoaded: true
                })
            }).catch(err => console.log(err))
        }
    }

    buildQuiltCommentLibrary(data) {
        var quiltsAndComments = {}
        data.map(item => {
            if(!quiltsAndComments[item.quilt_id]) {
                quiltsAndComments[item.quilt_id] = {
                    title: item.title,
                    about: item.about,
                    dimension: item.dimension,
                    imageUrl: item.image_url,
                    completedDate: item.completed_data,
                    comments: [{
                        commentText: item.comment_text,
                        author: item.author,
                        location: item.location,
                        isNew: item.is_new,
                        published: item.published,
                        commentDate: item.created_data
                    }]
                }
            } else {
                quiltsAndComments[item.quilt_id].comments.push({
                    commentText: item.comment_text,
                    author: item.author,
                    location: item.location,
                    isNew: item.is_new,
                    published: item.published,
                    commentDate: item.created_date
                })
            }
        })
        console.log(quiltsAndComments)
        return quiltsAndComments
    }

    findCommentsCount(comments, type) {
        var commentsCount = 0
        comments.map(comment => {
            if(comment[type] === 1) {
                commentsCount += 1
            }
        })
        return commentsCount
    }

    handleQuiltMiniClick(param, e) {
        this.setState(prevState => ({
            indQuiltView: !prevState.indQuiltView,
            currentIndQuilt: param
        }))
    }

    render() {
        this.fetchAllQuiltComments()
        var allData = this.state.allQuiltsAndComments
        var quiltGallery = []

        for(var quilt in allData) {
            quiltGallery.push(
                <div className='quilt-mini-container' onClick={this.handleQuiltMiniClick.bind(this, allData[quilt])}>
                    <AdminQuiltMini
                        quiltId={quilt}
                        totalComments={allData[quilt].comments.length}
                        publishedComments={this.findCommentsCount(allData[quilt].comments, 'published')}
                        newComments={this.findCommentsCount(allData[quilt].comments, 'isNew')}
                    />
                </div>
            )
        }

        return(
            <div className='quilts-gallery-container'>
                 <div>QUILT MODERATION GALLERY</div>
                 <div>{quiltGallery}</div>
                 {this.state.indQuiltView && <AdminQuiltView quiltData={this.state.currentIndQuilt} />}
            </div>
        )
    }
}

export default AdminQuiltsGallery
