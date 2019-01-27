import React, {Component} from 'react'
import Layout from '../components/layout'
import 'node-fetch'

class AdminPanel extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            formData: {},
            displayFormData: '',
            titleValue: '',
            completedDateValue: '',
            dimensionValue: '',
            aboutValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.appendFormData = this.appendFormData.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData()
        formData.append('titleValue', this.state.titleValue)
        formData.append('completedDateValue', this.state.completedDateValue)
        formData.append('dimensionValue', this.state.dimensionValue)
        formData.append('aboutValue', this.state.aboutValue)

        this.setState({
                formData: formData
            }, () => {
                this.appendFormData()
            }
        )

        for (var value of formData.entries()) {
            console.log(value)
        }
        
        fetch('http://localhost:3000/quilt/post', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(response => {console.log(response)})
        .catch(err => console.log(err))
    }

    handleChange(event, field) {
        this.setState({
            [field]: event.target.value
        })
    }

    appendFormData() {
        var data = this.state.formData
        var listItems = []
        for (var item of data.entries()) {
            listItems.push(<div>{item[0]}: <span style={{'color': 'red'}}>{item[1]}</span></div>)
        }

        var htmlData = [
            <div id="display-data">
                <div>The following data has been added:</div>
                <br></br>
                { listItems }
            </div>
        ]

        this.setState({
            displayFormData: htmlData
        })
    }

    render() {
        return (
            <Layout>
                <h1>ADMIN PANEL</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="quiltTitle" value={this.state.titleValue} onChange={event => this.handleChange(event, 'titleValue')} />
                    </div>
                    <div>
                        <label>Completed Date:</label>
                        <input type="text" name="quiltCompletedDate" value={this.state.completedDateValue} onChange={event => this.handleChange(event, 'completedDateValue')} />
                    </div>
                    <div>
                        <label>dimension:</label>
                        <input type="text" name="quiltDimension" value={this.state.dimensionValue} onChange={event => this.handleChange(event, 'dimensionValue')} />
                    </div>
                    <div>
                        <label>About:</label>
                        <input type="text" name="quiltAbout" value={this.state.aboutValue} onChange={event => this.handleChange(event, 'aboutValue')} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <div id='response-area'>
                    {this.state.displayFormData}
                </div>
            </Layout>
        )
    }
}

export default AdminPanel

// QUILT TABLE: quilt_id, title, completed_date, dimension, about, created_date, updated_date
// COMMENT TABLE: comment_id, author, comment_text, email, quilt_id, created_date, updated_date
