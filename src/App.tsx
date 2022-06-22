import { Routes, Route } from 'react-router-dom';

import OAuth2Redirect from './auth/OAuth2Redirect';
import Main from './pages/main';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/kakao/callback" element={<OAuth2Redirect />} />
    </Routes>
  );
};

export default App;
