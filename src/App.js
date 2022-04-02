import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';







function App() {

  return (
    <>
      <Router>
        <div>
           <Header />
        </div>
       
        <div className="App">
          <Container>
          {/* <div id='name'><br/><br/><br/><br/><br/> </div> */}
            <Switch>

              <Route exact path="/">
                <Trending/>
              </Route>
              <Route exact path="/movies">
                <Movies/>
                </Route>
              <Route exact path="/series">
                <Series/>
                </Route>
              <Route exact path="/search">
                <Search/>
                </Route>


            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </Router>

    </>

  );
}

export default App;
