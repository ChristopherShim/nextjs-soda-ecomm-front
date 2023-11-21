import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = {selectedItem: ""}

const selectItem = createSlice({
    name:"pidSelection",
    initialState,
    reducers: {
        selectPID(state){
            state.selectedItem("6541ea9d53222b62576a57af")
        }
    }
})

const store = configureStore({
    reducer: selectItem.reducer
})

export const selectAction = selectItem.actions

export default store;