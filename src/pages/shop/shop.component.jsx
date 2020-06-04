import React from 'react'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ hidden, toggleCartHidden, match }) => {
    console.log(match)
    const handleClick = () => {
        if(hidden===false) toggleCartHidden()
    }

    return(
        <div className='shop-page' onClick={() => handleClick()}>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
})

export default connect(mapStateToProps, {toggleCartHidden})(ShopPage)