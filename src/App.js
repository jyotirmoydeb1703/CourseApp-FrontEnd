import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import UpdateRecord from './components/UpdateRecords';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/:id' element={<UpdateRecord />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
