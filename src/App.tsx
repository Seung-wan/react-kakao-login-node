import { Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './pages/auth';
import Main from './pages/main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
