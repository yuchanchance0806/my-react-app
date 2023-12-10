import React from 'react';
import ComparisonTable from './components/ComparisonTable';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <ComparisonTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
