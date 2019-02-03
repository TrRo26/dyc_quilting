import React, {Component} from 'react'
import './admin_quilts_gallery.css'
import AdminQuiltMini from './admin_quilt_mini';

class AdminQuiltsGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allQuiltsAndComments: [],
            quiltsAndCommentsLoaded: false
        }
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
                // console.log("ALL DATA: ")
                // console.log(data)
            }).catch(err => console.log(err))
        }
    }

    buildQuiltCommentLibrary(data) {
        var quiltsAndComments = {}
        data.map(item => {
            // console.log(item)
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
                    commentDate: item.created_data
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

    render() {
        this.fetchAllQuiltComments()
        var allData = this.state.allQuiltsAndComments
        var quiltGallery = []

        for(var quilt in allData) {
            console.log("Quilt")
            console.log(quilt)
            quiltGallery.push(
                <AdminQuiltMini
                    quiltId={quilt}
                    totalComments={allData[quilt].comments.length}
                    publishedComments={this.findCommentsCount(allData[quilt].comments, 'published')}
                    newComments={this.findCommentsCount(allData[quilt].comments, 'isNew')}
                />
            )
        }

        return(
            <div className="quilts-gallery-container">
                 <div>QUILT COMMENTS</div>
                 <div>{quiltGallery}</div>
            </div>
        )
    }
}

export default AdminQuiltsGallery
