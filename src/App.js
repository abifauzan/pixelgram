import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import { GlobalStyles } from './styles/GlobalStyle';
import NotFound from './pages/404/404';
import AlbumDetail from './pages/AlbumDetail/AlbumDetail';
import PhotoDetail from './pages/PhotoDetail/PhotoDetail';
import Profile from './pages/Profile/Profile';
import UserPage from './pages/UserPage/UserPage';
import {
  useGetUsersQuery,
  useGetAlbumsQuery,
  useGetPhotosQuery,
} from './services/albumApi'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

function App() {

  const dataAlbums = useGetAlbumsQuery()
  const dataUsers = useGetUsersQuery()
  const dataPhotos = useGetPhotosQuery()

  const location = useLocation()

  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path='/' component={Home} exact />
          <Route path='/album/:id' component={AlbumDetail} exact />
          <Route path='/photo/:id' component={PhotoDetail} exact />
          <Route path='/user/:username' component={UserPage} exact />
          <Route path='/profile' component={Profile} exact />
          <Route component={NotFound} />
        </Switch>
        </AnimatePresence>
    </>
  );
}

export default App;
