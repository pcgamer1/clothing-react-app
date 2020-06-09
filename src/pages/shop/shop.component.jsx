import React from 'react'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
    }

    handleClick = () => {
        const { hidden } = this.props
        if(hidden===false) toggleCartHidden()
    }

    render() {
        const { match } = this.props
        const { isCollectionFetching, isCollectionsLoaded } = this.props
        return(
            <div className='shop-page' onClick={() => this.handleClick()}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/> }/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

export default connect(mapStateToProps, {toggleCartHidden, fetchCollectionsStartAsync})(ShopPage)