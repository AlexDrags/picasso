import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      const { todo, datetime, check } = action.payload;
      state.push({ todo, datetime, check });
    },
    removePost: (state, action: PayloadAction<any>) => {
      const indexId = action.payload;
      return state.filter((todo: any, index: any) => index !== indexId);
    },
    lineThrough: (state, action: PayloadAction<any>) => {
      const indexId = action.payload;
      return state.forEach((todo: any, index: any) => {
        if (index === indexId) {
          return (todo.check = true);
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removePost, lineThrough } = todoSlice.actions;
export default todoSlice.reducer;
