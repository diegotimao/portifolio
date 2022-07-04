import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Pojects from './pages/Pojects/projects';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/projects/:id' element={ <Pojects /> } />
    </Routes>
  )
}

