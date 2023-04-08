import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading(state) {
            state.isLoading = true
        },
        hiddenLoading(state) {
            state.isLoading = false
        },
    },
})

//! actions
export const { showLoading, hiddenLoading } = loadingSlice.actions

//! selector
export const selectLoadingStatus = (state) => state.loading.isLoading

//! reducers
const loadingReducer = loadingSlice.reducer
export default loadingReducer
