import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TasksPage from '../../pages/TasksPage/TasksPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import {useSelector} from 'react-redux';



function App() {
  const data = JSON.stringify(useSelector(state => state.data));
  localStorage.setItem('todoData', data);
  return (
    <Routes>
      <Route path='/' element={<ProjectsPage/>} />
      <Route path='/:id' element={<TasksPage />}/>
    </Routes>
    
  );
}

export default App;
