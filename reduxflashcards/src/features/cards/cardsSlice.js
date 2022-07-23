import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'cards',
    initialState: { cards: {
        '789': {
          id: '789',
          front: 'front text',
          back: 'back text'
        },
        '101': {
          id: '101',
          front: 'front text',
          back: 'back text'
        },
        '102': {
          id: '102',
          front: 'front text',
          back: 'back text'
        }, }},
    reducers: {
        addCard(state, action) {
            console.log(action.payload)
            return {...state,
                cards: {
                    ...state.cards,
                        [action.payload.id]: {
                            id: action.payload.id,
                            front: action.payload.front,
                            back: action.payload.back,
                        }
                }
            }
        },
    },
}

export const cardsSlice = createSlice(options); 

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer; 