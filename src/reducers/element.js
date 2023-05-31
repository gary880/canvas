import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

const elementSlice = createSlice({
    name: "element",
    initialState,
    reducers: {
        getElement: (state) => {
            return state
        },
        addElement: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({page,parent}) {
                return {
                    payload: {
                        id: `${Math.random()}`.replace('0.', ''),
                        page: page,
                        parent: parent,
                        name: "new element",
                        active: true,
                        positionX: 10,
                        positionY: 10,
                        opacity: 100,
                        color: "#E5E5E5",
                    },
                }
            },

        },
    
        updateElement: (state, action) => {
            const { id, name, active, positionX, positionY, opacity, color } = action.payload
            const existingItem = state.find((item) => item?.id === id)
            if (existingItem) {
                existingItem.name = name;
                existingItem.active = active;
                existingItem.positionX = positionX;
                existingItem.positionY = positionY;
                existingItem.opacity = opacity;
                existingItem.color = color;
            }
        },
        
    }
});

export const {
    getElement,
    addElement,
    updateElement
} = elementSlice.actions;
export const selectElements = (state) => state.element
export default elementSlice.reducer
