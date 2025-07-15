import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './style.css'
import ContextIndex from './assingment/contextLearning/ContextIndex';
import FocusInputField from './useRefLearning/FocusInputField';
import ChangeColor from './useRefLearning/ChangeColor';
import IndexPageCounter from './useReducer/counter/IndexPageCounter';
import IndexPageStudent from './useReducer/student/IndexPageStudent';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BMIInterestCalculator from './BmiInterestCalculator/BMIInterestCalculator';






const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);
root.render(
   
   

   <BrowserRouter>
      <nav className='container-fluid bg-light p-3 d-flex gap-3 shadow mb-5 flex-wrap'>
         <Link to='/' className='btn btn-outline-primary'>useReducer</Link>
         <Link to='/useContext' className='btn btn-outline-primary'>useContext</Link>
         <Link to='/useRef' className='btn btn-outline-primary'>useRef</Link>
         <Link to='/useEffect' className='btn btn-outline-primary'>useEffect</Link>
         <Link to='/calculator' className='btn btn-outline-primary'>Calculator</Link>
      </nav>
      <Routes>
         <Route 
            path='/' 
            element={
               <div className='useReducer d-flex flex-column gap-5'>
                  <IndexPageCounter />

                  <IndexPageStudent />
               </div>
            } 
         />

         <Route 
            path='/useContext'
            element={
               <ContextIndex />
            }
         />


         <Route 
            path='/useRef'
            element={
               <div>
                  <FocusInputField />
                  <ChangeColor />
               </div>
            }
         />

         <Route 
            path='/calculator'
            element={
               <BMIInterestCalculator />
            }
         />
      </Routes>
   </BrowserRouter>
   
   

   
 
)