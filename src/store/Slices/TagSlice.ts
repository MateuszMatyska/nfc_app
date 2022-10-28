import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import {TagEvent} from 'react-native-nfc-manager';

export interface TagsState {
  tags: TagEvent[];
}

const initialState: TagsState = {
  tags: [],
};

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<TagEvent>) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<TagEvent>) => {
      state.tags = state.tags.filter(
        item => item.id !== action.payload.id,
      ) as TagEvent[];
    },
    removeAll: state => {
      state.tags = [] as TagEvent[];
    },
  },
});

export const {addTag, removeTag, removeAll} = tagSlice.actions;
export const gettags = (state: RootState) => state.tags.tags;

export default tagSlice.reducer;
