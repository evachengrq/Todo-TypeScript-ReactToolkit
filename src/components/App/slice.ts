import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export interface Todo {
  id: string,
  value: string,
  isCompleted: boolean
}

const initialState: Todo[] = []

export const fetchData = createAsyncThunk<Todo[]> ('data_acquisition', async() => {
  const resp = await fetch('http://localhost:3001/todos')
  return (await resp.json() ) as Todo[]
})

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, {payload}) => {
      state = payload
      return state
    })
  }
})

export default dataSlice.reducer