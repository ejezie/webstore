import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ScreenProducts from "./screens/ScreenProducts";
import CartScreen from "./screens/CartScreen";
import SignScreen from "./screens/SignScreen";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  const toggleSideBar = () => setSideToggle(!sideToggle);
  const toggleFalse = () => setSideToggle();

  return (
    <Router>
      <Navbar show={sideToggle} toggle={toggleSideBar} />
      <SideDrawer show={sideToggle} />
      {/* <Backdrop toggle={toggleSideBar} togfalse = {toggleFalse} /> */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products" component={ScreenProducts}/>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/sign" component={SignScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
