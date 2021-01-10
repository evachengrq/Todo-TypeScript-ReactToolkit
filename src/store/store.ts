import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { reducer } from "../components/App/slice";

export type RootState = ReturnType<typeof reducer>
const store = configureStore({reducer})

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export default store