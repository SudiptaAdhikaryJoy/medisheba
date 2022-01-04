import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Login from "./components/Pages/Account/Login/Login";
import Register from "./components/Pages/Account/Register/Register";
import ContactForm from "./components/Pages/Homepage/ContactForm/ContactForm";
import Home from "./components/Pages/Homepage/Home/Home";
import OrderItem from "./components/Pages/OrderItem/OrderItem";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
        <Header />
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
          <Route path="/contact">
            <ContactForm></ContactForm>
          </Route>
          <Route path="/order/:id">
            <OrderItem url="https://medi-sheba-backend.herokuapp.com/getOneMedicine"></OrderItem>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
