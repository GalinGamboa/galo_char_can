
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavbarApp from './layouts/navbar';

// importamos los componentes creados
import Home from './components/home';
import Galery from './components/galery';
import Contact from './components/contact';
import Admin from './components/admin';
import Services from './components/services';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<NavbarApp/>}>
            <Route index element = {<Home/>}/>
            <Route  path ="galery" element ={<Galery/>}/>
            <Route path ="/contact" element ={<Contact/>}/>
            <Route path='services' element= {<Services/>}/>
            <Route path='admin' element= {<Admin/>}/>
            <Route path ="*" element ={<Navigate replace to = "/" />}/>
          </Route>
        </Routes>
      </BrowserRouter>

      

     </div>
  );
}

export default App;
