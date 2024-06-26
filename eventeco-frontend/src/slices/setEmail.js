import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    loading: false,
};

const setemailSlice = createSlice({
    name:"email",
    initialState: initialState,
    
    reducers: {
        setemail(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
        setToken(state, value) {
            state.token = value.payload;
        }
    },
});

export const {setemail, setLoading , setToken} = setemailSlice.actions;
export default setemailSlice.reducer;