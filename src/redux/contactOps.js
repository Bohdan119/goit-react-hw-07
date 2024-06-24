import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66746a4f75872d0e0a965ea1.mockapi.io/";
 
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const {data} = await axios('contacts')
    return data
})

export const deleteItem = createAsyncThunk("items/deleteItems", async (id) => {
  const { data } = await axios.delete(`contacts/${id}`)
  return data
})