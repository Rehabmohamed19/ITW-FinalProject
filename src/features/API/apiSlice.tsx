// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// export const apiSlice = createApi({
//   reducerPath: 'apiSlice',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.trello.com/',
//   }),
//   tagTypes: ['Post'],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => '1/members/me/boards?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97',
//     }),
//   }),
// })
// export const { useGetPostsQuery } = apiSlice


// IMPOOOO
// import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";


// export const getTodoAsync = createAsyncThunk(
//   'todos/getTodosAsync',
//   async()=>{
//     const response = await fetch('https://api.trello.com/1/members/me/boards?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97')
//     if (response.ok){
//       const todos= await response.json()
//       return{todos}
//     }
//   }
// )


// const todoSlice = createSlice({

//   name: "todos",
//   initialState:[],
//   reducers:{
//     addTodo: (state, action)=>{
//       const newTodo={
//         id:Date.now(),
//         name: action.payload.name,
//         completed:false
//       };
//       state.push(newTodo);
//     }
//   }, 
//   extraReducers:{
//     [getTodoAsync.fulfilled]:(state, action)=>{
//       return action.payload.todos
//     },
//   }
// })


// export const {addTodo} = todoSlice.actions;

// export default todoSlice.reducer;


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

interface TodoState {
  todos: Todo[],
}

interface ListState {
  lists: List[];
}

export const getTodoAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const response = await fetch(
    "https://api.trello.com/1/members/me/boards?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
  );
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

export const getListAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const response = await fetch(
    "https://api.trello.com/1/boards/64a5225812457e71814fe28b/lists?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
  );
  if (response.ok) {
    const lists = await response.json();
    return { lists };
  }
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: [] as TodoState["todos"],
  reducers: {
    addTodo: (state, action: PayloadAction<{ name: string }>) => {
      const newTodo: Todo = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
      };
      state.push(newTodo);
    },
  },
  extraReducers: (builder) => {
    // almost ERRO
    builder.addCase(getTodoAsync.fulfilled,(state, action:any) => {
        return action.payload.todos;
      }
    );

  },

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

export const { addTodo} = todoSlice.actions;
export const { addList} = ListSlice.actions;


export default todoSlice.reducer;
// export const ListSlice.reducer;


// export default ListSlice.reducer;
