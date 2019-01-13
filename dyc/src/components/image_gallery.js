import React, { Component } from 'react'
import QuiltCard from './quilt_card.js'
import QuiltData from '../quilt_data.js'

class ImageGallery extends Component {

    render() {
        const data = QuiltData()
        
        const quilts = data.map(quilt => {
            return (
                <l1>
                    <QuiltCard 
                        title={quilt.title}
                        date={quilt.date}
                        size={quilt.size}
                        about={quilt.about}
                        quiltImage={quilt.quiltImage}
                    />
                </l1>
            )
        })

        return (
            <div>
                <ul>
                    {quilts}
                </ul>
            </div>
        )
    }
}

export default ImageGallery
