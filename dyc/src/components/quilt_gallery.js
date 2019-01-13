import React, { Component } from 'react'
import QuiltCard from './quilt_card.js'
import QuiltData from '../quilt_data.js'
import './quilt_gallery.css'

class QuiltGallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filters: {date: ''}
        }
    }

    render() {
        // pull in quilt data from quilt_data.js
        const allQuiltData = QuiltData()

        // filter quilt data by date if defined in state
        const filteredQuilts = allQuiltData.filter(quilt => {
            if (this.state.filters.date != '') {
                for (var key in this.state.filters) {
                    if(quilt[key] === undefined || quilt[key] != this.state.filters[key]) {
                        return false
                    } else {
                        return quilt
                    }
                }
            }
            return true
        })

        // iterate over filtered quilt data to build QuiltCard components
        const filteredQuiltComponents = filteredQuilts.map(quilt => {
            return (
                <div key={quilt.title}>
                    <QuiltCard
                        title={quilt.title}
                        date={quilt.date}
                        size={quilt.size}
                        about={quilt.about}
                        quiltImage={quilt.quiltImage}
                    />
                </div>
            )
        })

        // return all filtered quilt QuiltCard components
        return (
            <div>
                <div className='filter-container'>
                    <span className='filter-year'>2016</span>
                    <span className='filter-year'>2017</span>
                    <span className='filter-year'>2018</span>
                </div>
                {filteredQuiltComponents}
            </div>
        )
    }
}

export default QuiltGallery
