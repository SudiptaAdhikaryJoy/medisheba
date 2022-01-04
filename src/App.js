import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Login from "./components/Pages/Account/Login/Login";
import Register from "./components/Pages/Account/Register/Register";
import ConfirmOrder from "./components/Pages/ConfirmOrder/ConfirmOrder";
import Dashboard from "./components/Pages/Dashboard/DashboardHome/Dashboard";
import Home from "./components/Pages/Homepage/Home/Home";
import OrderItem from "./components/Pages/OrderItem/OrderItem";
import RequestService from "./components/Pages/RequestService/RequestService";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/orderMedicine/:id">
              <OrderItem url="https://medi-sheba-backend.herokuapp.com/getOneMedicine"></OrderItem>
            </Route>
            <Route path="/requestService/:id">
              <RequestService></RequestService>
            </Route>
            <Route path="/order/:id">
              <OrderItem url="https://medi-sheba-backend.herokuapp.com/getOneMedicine"></OrderItem>
            </Route>
            <Route path="/confirmOrder/:confirmId">
              <ConfirmOrder></ConfirmOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
