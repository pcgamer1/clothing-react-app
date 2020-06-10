import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectIsUpLoading = createSelector(
    [selectUser],
    user => user.isUpLoading
)

export const selectIsInLoading = createSelector(
    [selectUser],
    user => user.isInLoading
)