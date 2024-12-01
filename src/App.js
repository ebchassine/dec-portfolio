import React from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Layout sidebar={<Sidebar />}>
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;