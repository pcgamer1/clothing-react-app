import userActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isUpLoading: false,
    isInLoading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                isInLoading: false
            } 
        case userActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isUpLoading: false
            }
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isInLoading: false
            }
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpLoading: false
            }
        case userActionTypes.SIGN_OUT_SUCCESS: 
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.EMAIL_SIGN_IN_START:
        case userActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isInLoading: true
            }
        case userActionTypes.SIGN_UP_START:
            return {
                ...state,
                isUpLoading: true
            }
        default: return state
    }
}

export default userReducer