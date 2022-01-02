import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Homepage/Home/Home";
import OrderItem from "./components/Pages/OrderItem/OrderItem";
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
          <Route path="/order/:id">
            <OrderItem url="https://medi-sheba-backend.herokuapp.com/getOneMedicine"></OrderItem>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
