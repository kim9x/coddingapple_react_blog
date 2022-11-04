import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },

    reducers: {
        changeName(state) {
            // return { name: 'park', age: 20 }
            state.name = 'park'
        },
        // state 변경함수를 action이라고 함.
        increase(state, action) {
            state.age += action.payload
        }
    }
})

export let { changeName, increase } = user.actions

export default user