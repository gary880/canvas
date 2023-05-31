import { configureStore } from '@reduxjs/toolkit'
import element from './reducers/element'
import page from './reducers/page'
export const store = configureStore({
    reducer: {
        element: element,
        page: page
    },
})