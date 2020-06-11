import { takeLatest, call, put, all } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../components/firebase/firebase.utils'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
    yield console.log('lol')

    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(e) {
        yield put(fetchCollectionsFailure(e.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas () {
    yield all([
        call(fetchCollectionsStart)
    ])
}