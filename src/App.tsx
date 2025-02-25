import { Button, Paper } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import About from './screens/about/About';
import { useState } from 'react';

function App() {
  const [currentPage,setCurrentpage]=useState('home')
  const changePage=(pageName:string)=>{
    setCurrentpage(pageName)
  }
  const goHome=()=>{
    setCurrentpage('home')
  }
  return (
    <div className="App">
     <Header title='Habit Tracker' onLogoClick={goHome} />
     {currentPage=='about' && <About/>}
     {currentPage=='home' && <Home onPageSelect={changePage}/>}
    </div>
  );
}

export default App;
