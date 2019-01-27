import React, {Component} from 'react'
import QuiltCard from './quilt_card.js'
import QuiltData from '../quilt_data.js'
import './quilt_gallery.css'

class QuiltGallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filters: {year: ''}
        }
    }

    handleFilterClick = (yr) => {
        var currentFiltersState = this.state.filters
        currentFiltersState.year = yr
        this.setState({currentFiltersState})
    }

    render() {
        // pull in quilt data from quilt_data.js
        const allQuiltData = QuiltData()

        // get year from full date
        function getYearFromDate(fullDate){
            var onlyYear = fullDate.split("/")[2]
            return onlyYear
        }

        // filter quilt data by date if defined in state
        const filteredQuilts = allQuiltData.filter(quilt => {
            if (this.state.filters.year != '') {
                for (var key in this.state.filters) {
                    if(quilt.date === undefined || getYearFromDate(quilt.date) != this.state.filters[key]) {
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
                        quiltId={quilt.id}
                        disqusURL={quilt.disqusURL}
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
            <div className='quilt-gallery-container'>
                <div className='filter-container'>
                    <span className='filter-year' onClick={() => this.handleFilterClick('')}>All</span>
                    <span className='filter-year' onClick={() => this.handleFilterClick('2016')}>2016</span>
                    <span className='filter-year' onClick={() => this.handleFilterClick('2017')}>2017</span>
                    <span className='filter-year' onClick={() => this.handleFilterClick('2018')}>2018</span>
                </div>
                {filteredQuiltComponents}
            </div>
        )
    }
}

export default QuiltGallery
