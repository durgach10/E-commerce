
import { Routes,Route } from 'react-router-dom';
import './App.css';
 import Ecommerce from './component/Ecommerce';
import Women from './component/Women';

import Navbar from './component/Navbar';
 import { BrowserRouter } from 'react-router-dom';
import Men from './component/Men';
import Kids from './component/Kids';
import Jewellery from './component/Jewellery';
import Footwear from './component/Footwear';
import DownloadApp from './component/DownloadApp';





function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/Women' element={<Women />}></Route>
        <Route path='/Men' element={<Men />}></Route>
        <Route path='/Kids' element={<Kids />}></Route>
        <Route path='/Jewellery' element={<Jewellery />}></Route>
        <Route path='/Footwear' element={<Footwear />}></Route>
        
          
        
      </Routes>
      
       
      <Ecommerce /> 
      
    </div>
  );
}

export default App;
