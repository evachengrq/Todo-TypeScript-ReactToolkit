import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Input from "../Input/Input";
import Footer from "../Footer/Footer";
import TodoList from "../TodoList/TodoList";
import { AppThunkDispatch } from "../../store/store";
import './App.css';
import { useDispatch } from "react-redux";
import { fetchData } from './slice';

function App() {

  const dispatch: AppThunkDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Input />
      <TodoList/>
      <Footer />
    </div>
  )
}

export default App;
