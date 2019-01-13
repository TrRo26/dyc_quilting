import React, {Component} from 'react'
import './info_item_full.css'

class InfoItemFull extends Component {

    render() {
        return(
            <div className='info-item-back'>{this.props.infoItem}</div>
        )
    }

}

export default InfoItemFull
