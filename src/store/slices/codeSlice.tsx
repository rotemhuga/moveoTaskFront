import { createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "mongoose";

export interface ICode {
    _id: ObjectId;
    title: string;
    code: string;
    roomNumber:string;
}

const getCodesData = await fetch ("https://moveotasksback.onrender.com/moveoTask/codes") 
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((err:any) => {
        console.log(err.message);
    });

console.log(getCodesData)

// const allCodesValue:any = await getCodesData

export const codeSlice = createSlice({
    name:"codes",
    initialState: {
        value:getCodesData,
        currentRoomValue: getCodesData._id
    },
    reducers: {
        printData:(state) =>{
            console.log(state.value)
        },
        codePageFilter:(state) => {
            state.value = state.value;
        },
        getCurrentRoom:(state,action) =>{
            state.currentRoomValue = action.payload
        }

    }
})

export const {codePageFilter, printData} = codeSlice.actions
export default codeSlice.reducer

