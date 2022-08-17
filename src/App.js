
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Cards />} />
    <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
