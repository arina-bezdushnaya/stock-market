import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LayoutWrapper} from "./shared/Layout/Layout";
import {Main} from "./pages/main";
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
