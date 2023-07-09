

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


interface NewCard {
  id: number;
  name: string;
  completed: boolean;

}



export interface CardState {
  cards: NewCard[];
}



export const addCardAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const response = await fetch(
    // "https://api.trello.com/1/boards/64a5225812457e71814fe28b/lists?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
    "https://api.trello.com/1/cards?idList=64a5225812457e71814fe28b&key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
    );
  if (response.ok) {
    const cards = await response.json();
    return { cards };
  }
});



export const newCardSlice = createSlice({
  name: "cards",
  initialState: [] as CardState["cards"],
  reducers: {

    addNewCard: (state, action: PayloadAction<{ name: string }>) => {
      const newList: NewCard = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
      };
      state.push(newList);
    },
    
  },
  extraReducers: (builder) => {
    // almost ERRO

    builder.addCase(addCardAsync.fulfilled,(state, action:any) => {
      return action.payload.cards;
    }
  );
  },

});

export const { addNewCard} = newCardSlice.actions;



export default newCardSlice.reducer;

// export default ListSlice.reducer;
