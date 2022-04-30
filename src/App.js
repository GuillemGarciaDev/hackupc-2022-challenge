import { Routes, Route } from 'react-router-dom';
import Home from './app/home/Home';
import List from './app/list/List';
import Tinder from './app/tinder/Tinder';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/list' element={<List />} />
      <Route path='/tinder' element={<Tinder />} />
    </Routes>
  );
}

export default App;
