

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface List {
  id: number;
  name: string;
  completed: boolean;

}

interface NewCard {
  id: number;
  name: string;
  completed: boolean;

}

export interface TodoState {
  todos: Todo[],
}

export interface ListState {
  lists: List[];
}


export interface CardState {
  cards: NewCard[];
}


export const getListAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const response = await fetch(
    "https://api.trello.com/1/boards/64a5225812457e71814fe28b/lists?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
  );
  if (response.ok) {
    const lists = await response.json();
    return { lists };
  }
});



export const addCardAsync = createAsyncThunk("todos/addCardAsync" , async (object:any) => {
  const response = await fetch(
    // "https://api.trello.com/1/boards/64a5225812457e71814fe28b/lists?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
    "https://api.trello.com/1/cards?idList="+object.status + "&name=" + object.name + "&desc" + object.desc + "&key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
    ,{
      
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    })
    
  if (response.ok) {
    const cards = await response.json();
    return { cards };
  }
});


export const ListSlice = createSlice({
  name: "lists",
  initialState: [] as ListState["lists"],
  reducers: {

    addList: (state, action: PayloadAction<{ name: string }>) => {
      const newList: List = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
      };
      state.push(newList);
    },
    
  },
  extraReducers: (builder) => {
    // almost ERRO

    builder.addCase(getListAsync.fulfilled,(state, action:any) => {
      return action.payload.lists;
    }
  );
  },

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

    builder.addCase(getListAsync.fulfilled,(state, action:any) => {
      return action.payload.cards;
    }
  );
  },

});

export const { addList} = ListSlice.actions;
export const { addNewCard} = newCardSlice.actions;



export default ListSlice.reducer;

// export default ListSlice.reducer;
