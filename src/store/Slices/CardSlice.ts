import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import {CardType} from '../../types/CardType';

export interface CardsState {
  cards: CardType[];
}

const initialState: CardsState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<CardType>) => {
      state.cards = state.cards.filter(
        item => item.cardNumber !== action.payload.cardNumber,
      ) as CardType[];
    },
    removeAll: state => {
      state.cards = [] as CardType[];
    },
  },
});

export const {addCard, removeCard, removeAll} = cardSlice.actions;
export const getCards = (state: RootState) => state.cards.cards;

export default cardSlice.reducer;
