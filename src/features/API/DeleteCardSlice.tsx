import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


// interface UpdateCard {
//     id: number;
//     name: string;
//     completed: boolean;
// }

// export interface CardStates {
//     card: UpdateCard[];
// }



interface DeleteCard {
    id: number;
    name: string;
    completed: boolean;
}

export interface CardStates {
    deletecard: DeleteCard[];
}


// export const updateCardAsync = createAsyncThunk("todos/updateCardAsync", async (object:any) => {
//     const response = await fetch(
//         "https://api.trello.com/1/cards/"+object.id+"?idList="+ object.status + "&name=" + object.name + "&desc=" + object.desc + "&key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
        
//         , {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })

//     if (response.ok) {
//         const editCard = await response.json();
//         // console.log({editCard})
//         return { editCard };
//     }
// });

export const deleteCardAsync = createAsyncThunk("todos/deleteCardAsync", async (object:any) => {
    const response = await fetch(
        "https://api.trello.com/1/cards/"+object.id+"?key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
        
        , {
            method: 'DELETE',
        })

    if (response.ok) {
        const deleteCard = await response.json();

        return { deleteCard };
    }
});


// export const updateCardSlice = createSlice({
//     name: "card",
//     initialState: [] as CardStates["card"],
//     reducers: {

//         UpdateCard: (state, action: PayloadAction<{ name: string }>) => {
//             const newList: UpdateCard = {
//                 id: Date.now(),
//                 name: action.payload.name,
//                 completed: false,
//             };
//             state.push(newList);
//         },


//     },
//     extraReducers: (builder) => {
//         // almost ERRO

//         builder.addCase(updateCardAsync.fulfilled, (state, action: any) => {
//             return action.payload.card;
//         }
//         );
//     },

// });

export const deleteCardSlice = createSlice({
    name: "deletecard",
    initialState: [] as CardStates["deletecard"],
    reducers: {

        DeleteCard: (state, action: PayloadAction<{ name: string }>) => {
            const newList: DeleteCard = {
                id: Date.now(),
                name: action.payload.name,
                completed: false,
            };
            state.push(newList);
        },
    },
    extraReducers: (builder) => {
        // almost ERRO

        builder.addCase(deleteCardAsync.fulfilled, (state, action: any) => {
            return action.payload.card;
        }
        );
    },

});

export const { DeleteCard } = deleteCardSlice.actions;



export default deleteCardSlice.reducer;


// export default ListSlice.reducer;


