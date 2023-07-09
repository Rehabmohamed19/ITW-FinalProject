// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { apiSlice } from './features/API/apiSlice'

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// })
// setupListeners(store.dispatch)


import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './features/API/apiSlice'
import { useDispatch } from "react-redux";
import ListSlice  from './features/API/ListSlice';
import newCardSlice  from './features/API/NewCardSlice';
import { reducer as formReducer } from 'redux-form';
// import SignInForm from './components/CreateNewTask';
import updateCardSlice from './features/API/UpdateCardSlice'
import boardSlice from './features/API/NewBoardSlice'



export const store= configureStore({

  
  reducer: {
    lists:ListSlice,
    todos:todoSlice,
    cards:newCardSlice,
    updatecards:updateCardSlice,
    board:boardSlice,
    form: formReducer,
  }

  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
