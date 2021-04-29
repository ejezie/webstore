import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  const toggleSideBar = () => setSideToggle(!sideToggle);

  return (
    <Router>
      <Navbar show={sideToggle} toggle={toggleSideBar} />
      <SideDrawer show={sideToggle} />
      <Backdrop toggle={toggleSideBar} />
      <main onClick={toggleSideBar}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
