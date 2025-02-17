import { Button, Paper } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
function App() {
  return (
    <div className="App">
     <Header title='Habit Tracker' />
     <Home />
    </div>
  );
}

export default App;
