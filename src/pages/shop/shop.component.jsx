import React from 'react'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../components/firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    state = { loading: true }
    unsubscribeFromSnapshot = null
    
    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    handleClick = () => {
        const { hidden } = this.props
        if(hidden===false) toggleCartHidden()
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return(
            <div className='shop-page' onClick={() => this.handleClick()}>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/> }/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
})

export default connect(mapStateToProps, {toggleCartHidden, updateCollections})(ShopPage)