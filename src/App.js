import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import { GlobalStyles } from './styles/GlobalStyle';
import NotFound from './pages/404/404';
import AlbumDetail from './pages/AlbumDetail/AlbumDetail';
import PhotoDetail from './pages/PhotoDetail/PhotoDetail';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/album/:name' component={AlbumDetail} exact />
        <Route path='/photo/:name' component={PhotoDetail} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
