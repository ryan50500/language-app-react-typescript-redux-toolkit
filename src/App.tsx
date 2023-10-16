import React from 'react';
import './App.css';
import FilterLogic from './components/FilterLogic';
import Filters from './components/Filters'

function App() {
  return (
    <>
      <Filters />
      <FilterLogic />
    </>
  );
}

export default App;
