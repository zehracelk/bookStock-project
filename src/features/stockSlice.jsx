import { createSlice } from "@reduxjs/toolkit";

const values = {
    products: 'books',
    firms: 'publishers',
    brands: 'authors'
}
const stockSlice = createSlice({
    name: "stock",

    initialState: {
        purchases: null,
        sales: null,
        authors: null,
        books: null,
        publishers: null,
        categories: null,
        loading: false,
        error: false,

    },



    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        getSuccess: (state, { payload: { url, data } }) => {
            state.loading = false;
            const value = values[url];
            state[value] = data;


        },

        getBookAuthSuccess: (state, { payload }) => {
            state.loading = false;
            state.books = payload[0];
            state.authors = payload[1];


        },


        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
});

export const {
    fetchStart,
    getSuccess,
    fetchFail,
    getBookAuthSuccess
} = stockSlice.actions;
export default stockSlice.reducer;