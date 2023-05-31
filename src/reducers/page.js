import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        name: "page 1",
        active: false
    }
]
const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        getPage: (state) => {
            return state
        },
        addPage: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare() {
                return {
                    payload: {
                        id: `${Math.random()}`.replace('0.', ''),
                        name: "new page",
                        active: false,
                    },
                }
            },

        },
        updatePage: (state, action) => {
            const { name, id, active } = action.payload
            const existingItem = state.find((item) => item?.id === id)
            if (existingItem) {
                existingItem.name = name
                existingItem.active = active
            }
        },
    }
});

export const {
    getPage,
    addPage,
    updatePage
} = pageSlice.actions;
export const selectPages = (state) => state.page
export default pageSlice.reducer
