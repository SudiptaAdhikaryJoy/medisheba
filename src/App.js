import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Login from "./components/Pages/Account/Login/Login";
import Register from "./components/Pages/Account/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
