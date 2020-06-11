import React, { useEffect } from 'react'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../../pages/collection/collection-container.component'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart()
    },[fetchCollectionsStart])

    // const handleClick = () => {
    //     if(hidden===false) toggleCartHidden()
    // }

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
        )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps, {toggleCartHidden, fetchCollectionsStart})(ShopPage)