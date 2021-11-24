import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBooks from './containers/AddBooks';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
            <Switch>
                <Route exact path="/" component={AddBooks} />  
                <Route path="/search" component={SearchBooks} />
            </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
