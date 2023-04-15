import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import About from './components/About/About.js';
import Home from './Home.js';
import Contact from './components/Contact/Contact.js';

const ro=createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
  </Route>
)

const r=createBrowserRouter(ro)

function App() {
  return (
    <>
      <RouterProvider router={r}/>
     
    </>
  );
}

export default App;
