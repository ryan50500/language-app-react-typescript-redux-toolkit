import React from 'react';
import './App.css';
import TeachersList from './components/TeachersList';
import Filters from './components/Filters'

function App() {
  return (
    <>
      <Filters />
      <TeachersList />
    </>
  );
}

export default App;
