import React, { useEffect, lazy, Suspense } from 'react'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component'

const CollectionPageContainer = lazy(() => import('../../pages/collection/collection-container.component'))
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'))

const ShopPage = ({ fetchCollectionsStart, match }) => {
    
    useEffect(() => {
        fetchCollectionsStart()
    },[fetchCollectionsStart])
    
    return(
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
        )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps, {toggleCartHidden, fetchCollectionsStart})(ShopPage)