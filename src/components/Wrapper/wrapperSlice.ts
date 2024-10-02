import { createSlice } from '@reduxjs/toolkit'

export const wrapperSlice = createSlice({
    name: 'wrapper',
    initialState: {
        cards: [],
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