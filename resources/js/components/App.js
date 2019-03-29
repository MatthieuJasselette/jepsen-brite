import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import components
import EventListContainer from './EventListContainer';
import EventDisplayContainer from './EventDisplayContainer';
import EventCreateContainer from './EventCreateContainer';
import EventHistoryContainer from './EventHistoryContainer';
import EventEditContainer from './EventEditContainer';
import NavBar from './views/NavBar';

export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={EventListContainer} />
        <Route exact path="/event-display" component={EventDisplayContainer} />
        <Route exact path="/event-create" component={EventCreateContainer} />
        <Route exact path="/event-history" component={EventHistoryContainer} />
        <Route exact path="/event-edit" component={EventEditContainer} />

      </Switch>
    </React.Fragment>
  )
}

export default App;