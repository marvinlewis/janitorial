import React from 'react';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import FreeQuote from "./components/WelcomePage/FreeQuote";
import AboutUs from "./components/aboutus/AboutUs";
import Photos from './components/photos/Photos';
import Careers from './components/careers/Careers';
import Login from './components/login/Login';
import Admin from './components/login/Admin';
import PrivateRoute from "./components/login/PrivateRoute";
import Quotes from './components/login/admin/Quotes';
import Jobs from './components/login/admin/Jobs'
import { Route } from "react-router-dom";
import { Badge } from 'reactstrap';
import './App.css';
import NavBar from './components/WelcomePage/NavBar';

function App() {
  return (
    <div className="App">
      <h1>MJ Janitorial Services LLC</h1> 
      <NavBar/>
      <h2 className='clean'> We Love to <Badge color="secondary">CLEAN</Badge></h2>
      
      <Route  exact path="/">
      <WelcomePage/>
      </Route>

      <Route path="/freequote">
      <FreeQuote/>
      </Route>

      <Route path='/aboutus'>
      <AboutUs/>
      </Route>

      <Route path='/photos'>
      <Photos/>
      </Route>

      <Route path='/careers'>
      <Careers/>
      </Route>

      <Route path='/login'>
      <Login/>
      </Route>

      <PrivateRoute exact path="/admin" component={Admin}/>

      <Route path='/admin/quotes'>
                <Quotes/>
            </Route>
      <Route path='/admin/jobs'>
        <Jobs/>
      </Route>
    </div>
  );
}

export default App;
