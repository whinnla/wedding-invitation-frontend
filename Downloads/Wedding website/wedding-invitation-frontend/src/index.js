import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import GuestLogin from './pages/GuestLogin';
import RSVP from './pages/RSVP';
import MusicRequest from './pages/MusicRequest';
import Countdown from './pages/Countdown';
import VenueMap from './pages/VenueMap';
import Guestbook from './pages/Guestbook';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/guest-login" component={GuestLogin} />
      <Route path="/rsvp" component={RSVP} />
      <Route path="/music-request" component={MusicRequest} />
      <Route path="/countdown" component={Countdown} />
      <Route path="/venue-map" component={VenueMap} />
      <Route path="/guestbook" component={Guestbook} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
