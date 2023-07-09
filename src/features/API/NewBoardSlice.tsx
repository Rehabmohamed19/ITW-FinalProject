import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


interface Board {
    id: number;
    name: string;
    // completed: boolean;
}

export interface BoardState {
    board: Board[];
}


export const boardAsync = createAsyncThunk("todos/boardAsync", async (object:any) => {
    const response = await fetch(
        "https://api.trello.com/1/cards/"+object.id+"?idList="+ object.status + "&name=" + object.name + "&desc=" + object.desc + "&key=b620a81b756337cbe6af1ccc479dfca2&token=ATTA5919d3f075b156f8f04fe76c1c7525b7641422401e618308b5597d79db8b4551C84ECF97"
        
        , {
            method: 'PUT',
            headers: {
                'Accept': 'application/json'
            }
        })

    if (response.ok) {
        const newBoard = await response.json();
        // console.log({editCard})
        return { newBoard };
    }
});


export const boardSlice = createSlice({
    name: "board",
    initialState: [] as BoardState["board"],
    reducers: {

        Board: (state, action: PayloadAction<{ name: string }>) => {
            const newList: Board = {
                id: Date.now(),
                name: action.payload.name,
                // completed: false,
            };
            state.push(newList);
        },


    },
    extraReducers: (builder) => {
        // almost ERRO

        builder.addCase(boardAsync.fulfilled, (state, action: any) => {
            return action.payload.board;
        }
        );
    },

});



export const { Board } = boardSlice.actions;



export default boardSlice.reducer;


// export default ListSlice.reducer;


