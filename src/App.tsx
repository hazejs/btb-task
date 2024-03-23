import React from 'react';
import { Provider as MainProvider } from '../src/context/MainContext';
import './index.css'; // Import CSS file for styling
import Layout from './components/Layout';

const App: React.FC = () => {

  return (
    <MainProvider>
      <Layout/>
    </MainProvider>
  );
};

export default App;
