import React from 'react';
import MainContainer from './components/MainContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './styles/main.css';

library.add(fab)

const App = () => {
  return <MainContainer />
}

export default App;