import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stepper from './components/Stepper';
import Footer from './components/Footer'
import FileUpload from './pages/File_upload';
import ListChannel from './pages/ListChannel';


function App() {
  return (
    <div className='bg-slate-200'>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Stepper />
        <Routes>
          <Route path='/' exact element={<FileUpload />}/>
          <Route path='/listChannel' element={<ListChannel />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
