import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import TasksPage from '../../pages/TasksPage/TasksPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import {useSelector} from 'react-redux';



function App() {
  // const data = useSelector(state => state.data);
  // localStorage.setItem('todoData', data);
  // // useEffect(() => ,[data]);
  // console.log('App:', data);
   
  return (
    <Routes>
      <Route path='/' element={<ProjectsPage/>} />
      <Route path='/:id' element={<TasksPage />}/>
    </Routes>
    
  );
}

export default App;
