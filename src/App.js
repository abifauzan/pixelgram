import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import { GlobalStyles } from './styles/GlobalStyle';
import NotFound from './pages/404/404';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
