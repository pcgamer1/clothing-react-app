import React from 'react'
import data from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {collections: data}
    }

    handleClick = () => {
        console.log(this.props.hidden)
        if(this.props.hidden===false) this.props.toggleCartHidden()
    }

    render() {
        const {collections} = this.state
        return(
            <div onClick={() => this.handleClick()}>
                {
                    collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
                }
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps, {toggleCartHidden})(ShopPage)