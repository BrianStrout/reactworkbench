import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Store from './components/store/storehome'


function App() {
  return (
    <div className="App">

<Router>
<Routes>
<Route path='/' element={<Home />} />
  <Route path='store' element={<Store />} />

</Routes>
</Router>


    </div>
  );
}

export default App;
