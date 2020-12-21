import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import Products from './containers/Products';
import NotFound from './containers/NotFound';
import store from './store/store'
import './App.css';

function App() {
  return (
   <Provider store={store}>
     <Router>
     <Switch>
       <Route exact path="/" component={Products} />
       <Route path="*" component={NotFound} />
     </Switch>
   </Router>
   </Provider>
  );
}

export default App;
