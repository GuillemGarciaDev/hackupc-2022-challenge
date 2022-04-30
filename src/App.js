import { Routes, Route } from 'react-router-dom';
import Home from './app/home/Home';
import List from './app/list/List';
import Tinder from './app/tinder/Tinder';
import Success from './app/end/Success'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/list' element={<List />} />
      <Route path='/tinder' element={<Tinder />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  );
}

export default App;
