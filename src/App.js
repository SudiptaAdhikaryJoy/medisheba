import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./components/Pages/Account/Login/Login";
import Register from "./components/Pages/Account/Register/Register";
import Home from "./components/Pages/Homepage/Home/Home";
import OrderItem from "./components/Pages/OrderItem/OrderItem";
import RequestService from "./components/Pages/RequestService/RequestService";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/order/:id">
            <OrderItem url="https://medi-sheba-backend.herokuapp.com/getOneMedicine"></OrderItem>
          </Route>
          <Route path="/requestService/:id">
            <RequestService></RequestService>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
