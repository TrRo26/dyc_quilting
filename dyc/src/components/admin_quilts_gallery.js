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
                    allQuiltsAndComments: data,
                    quiltsAndCommentsLoaded: true
                })
                this.buildQuiltCommentLibrary(data)
                // console.log("ALL DATA: ")
                // console.log(data)
            }).catch(err => console.log(err))
        }
    }

    // STOPPED HERE!!! BUILDING QUILT AND COMMENT OBJECT FOR EASY DISPLAY AND ACCESS
    buildQuiltCommentLibrary(data) {
        var quiltsAndComments = {}
        // for(var item in data) {            
        //     if (!item.quilt_id in quiltsAndComments) {
        //         quiltsAndComments[quilt_id]
        //     }
        // }
        console.log("LIBRARY: ")
        console.log(data)
    }

    render() {
        this.fetchAllQuiltComments()
        var quilts = []
        const quiltGallery = this.state.allQuiltsAndComments.map(item => {
            if(!quilts.includes(item.quilt_id)) {
                quilts.push(item.quilt_id)
                return(
                    <AdminQuiltMini
                        quiltId={item.quilt_id}
                        totalComments={"temp"}
                        publishedComments={"temp"}
                        newComments={"temp"}
                    />
                )
            }
        })

        return(
            <div className="quilts-gallery-container">
                 <div>QUILT COMMENTS</div>
                 <div>{quiltGallery}</div>
            </div>
        )
    }
}

export default AdminQuiltsGallery
