import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TasksPage from '../../pages/TasksPage/TasksPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<ProjectsPage/>} />
      <Route path='/:id' element={<TasksPage />}/>
    </Routes>
    
  );
}

export default App;
