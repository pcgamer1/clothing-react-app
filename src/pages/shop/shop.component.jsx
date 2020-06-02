import React from 'react'
import data from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {collections: data}
    }

    render() {
        const {collections} = this.state
        return(
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
                }
            </div>
        )
    }

}

export default ShopPage