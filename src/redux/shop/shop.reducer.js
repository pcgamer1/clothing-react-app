import data from './shop.data'
import _ from 'lodash'

const INITIAL_STATE = {
    collections: _.mapKeys(data, 'routeName')
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state
    }
}

export default shopReducer