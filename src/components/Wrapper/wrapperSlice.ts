import { createSlice } from '@reduxjs/toolkit'

export const wrapperSlice = createSlice({
    name: 'wrapper',
    initialState: {
        cards: [
            {
                status: "todo",
                bodyText: "react typescript redux",
                headerText: "javascript",
                btns: "any",
                id: "1"
            },
            {
                status: "todo",
                bodyText: "Lorem ipsum react redux",
                headerText: "toolkit",
                btns: "any",
                id: "2"
            },
            {
                status: "done",
                bodyText: "lorem",
                headerText: "Lorem Ipsum",
                btns: "any",
                id: "3"
            },
        ],
    },
    reducers: {
        addCard: (state, action) => {
            state.cards.push({
                status: "todo",
                bodyText: action.payload.bodyText,
                headerText: action.payload.headerText,
                btns: "any",
                id: String(Date.now())
            },)
        },
        changeCardStatus: (state, action) => {
            const cardIdx = state.cards.findIndex((v) => v.id === action.payload.id);
            state.cards[cardIdx].status = action.payload.status;
        },
        deleteCard: (state, action) => {
            const cardIdx = state.cards.findIndex((v) => v.id === action.payload.id);
            state.cards.splice(cardIdx, 1);
        }
    },
})

export const { addCard, changeCardStatus, deleteCard } = wrapperSlice.actions

export default wrapperSlice.reducer