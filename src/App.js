import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import ProjectList from './pages/ProjectList';
import ProjectDetails from './pages/ProjectDetails';
import AddProject from './pages/AddProject';
import SignUp from './pages/signup';
import Editor from './pages/Editor';

  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route  path='/'  element={<Home />} />
        <Route path='/ProjectList' element={<ProjectList/>} />
        <Route path='/ProjectList/:id' element={<ProjectDetails/>} />
        <Route path='/ProjectDetails' element={<ProjectDetails/>} />
        <Route path='/AddProject' element={<AddProject/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/editor' element={<Editor/>} />
        
    </Routes>
    </Router>
);
}
  
export default App;