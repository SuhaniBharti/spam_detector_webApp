import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Error from './components/pages/Error/Error';
import ScrollToTop from '../src/ScrollToTop';
import Home from './components/pages/Home/Home';

function App() {
  return(
    <BrowserRouter>
     <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
