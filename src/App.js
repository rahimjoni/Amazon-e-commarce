import './App.css';
import React, {useEffect} from 'react';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import {auth} from "./firebase";
import {useStateValue} from "./Components/StateProvider";

function App() {
    const [{basket}, dispatch] = useStateValue();

    useEffect(()=>{
        auth.onAuthStateChanged(authUser =>{
            console.log(authUser);
            if(authUser){
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            }else{
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
    },[])
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <Route path="/checkout">
                      <Checkout/>
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
