import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Todo {
  id: string,
  value: string,
  isCompleted: boolean
}

export enum Filteration{
  ALL = 'All',
  COMPLETED = 'Completed',
  ACTIVE = 'Active'
}

export interface State {
  todos: Todo[], filteration: Filteration
}

const initialState:State = {todos: [], filteration: Filteration.ALL}

export const getListByStatus = (state: State): Todo[] => {
  if (state.filteration === 'Active') {
    return state.todos.filter(item => item.isCompleted === false)
  } else if (state.filteration === 'Completed') {
    return state.todos.filter(item => item.isCompleted === true)
  } else {
    return state.todos
  }
}

const dataUrl: string = 'http://localhost:3001/todos'

export const fetchData = createAsyncThunk<Todo[]> ('data_acquisition', async() => {
  const resp = await fetch(dataUrl)
  return resp.json()
})

export const addTodo = createAsyncThunk<Todo, string> ('post_data', async(input: string) => {
  const resp = await fetch(dataUrl, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: nanoid(),
      value: input,
      isCompleted: false
    })
  })
  return (await resp.json()) as Todo
})

export const deleteTodo = createAsyncThunk<string, string> ('delete-data', async(id: string) => {
  try {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
  } catch(error) {
    console.log(error);
  }
  return id
})

export const updateTodo = createAsyncThunk('update-data', async(item: Todo) => {
  const resp = await fetch(`http://localhost:3001/todos/${item.id}`, {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(item)
  })
  return resp.json()
})

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateCompletionStatus:(state, action) => {
      state.filteration = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, {payload}) => {
      state.todos = payload
      return state
    })
    builder.addCase(addTodo.fulfilled, (state, {payload}) => {
      state.todos.push(payload)
    })
    builder.addCase(deleteTodo.fulfilled, (state, {payload}) => {
      state.todos = state.todos.filter(item => item.id !== payload)
      return state
    })
    builder.addCase(updateTodo.fulfilled, (state, {payload}) => {
      const index = state.todos.findIndex(item => item.id === payload.id)
      const itemsBeforeEditedItem = state.todos.slice(0, index)
      const itemsAfterEditedItem = state.todos.slice(index + 1)
      state.todos = [...itemsBeforeEditedItem, payload, ...itemsAfterEditedItem];
      return state
    })
  }
})
export const { updateCompletionStatus } = dataSlice.actions
export const reducer = dataSlice.reducer
