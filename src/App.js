import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chips from './Chips';
import Soda from './Soda';
import Cookies from './Cookies';
import Home from './Home'

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/cookies' element={<Cookies />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
