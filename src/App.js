import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stepper from './components/Stepper';


function App() {
  return (
    <div className='bg-slate-200'>
      <Navbar />
      <Header />
      <Stepper />
    </div>
  );
}

export default App;
