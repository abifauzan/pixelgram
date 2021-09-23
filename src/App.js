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

function App() {

  const dataAlbums = useGetAlbumsQuery()
  const dataUsers = useGetUsersQuery()
  const dataPhotos = useGetPhotosQuery()

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/album/:id' component={AlbumDetail} exact />
        <Route path='/photo/:id' component={PhotoDetail} exact />
        <Route path='/user/:username' component={UserPage} exact />
        <Route path='/profile' component={Profile} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
