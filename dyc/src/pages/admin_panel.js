import React, {Component} from 'react'
import Layout from '../components/layout'
import AdminAddQuilt from '../components/admin_add_quilt.js'
import AdminQuiltsGallery from '../components/admin_quilts_gallery.js'

class AdminPanel extends Component {
  
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <h1>ADMIN PANEL</h1>
                <div>
                    <AdminAddQuilt />
                </div>
                <div style={{'margin-top': '50px'}}></div>
                <div>
                    <AdminQuiltsGallery />
                </div>
            </Layout>
        )
    }
}

export default AdminPanel

// QUILT TABLE: quilt_id, title, completed_date, dimension, about, created_date, updated_date
// COMMENT TABLE: comment_id, author, comment_text, email, quilt_id, created_date, updated_date
