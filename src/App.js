import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import Cursor from "../src/Componet/cursor/cursor";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CarouselPage from "./pages/CarouselPage";
import ProjectDetails from "./pages/ProjectDetails";
import Masonry from "./pages/Masonry";
import LoadAnim from "./Componet/LoadAnim";

function App() {
  const location = useLocation();
  const [locationP, setLocationP] = useState(location);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (location !== locationP) {
      window.scrollTo(0, 0);
      setAnim(true);
      setTimeout(() => {
        setLocationP(location);
      }, 800);
    }
    return () => {
      setTimeout(() => {
        setAnim(false);
      }, 1900);
    };
  }, [location, locationP]);
  return (
    <>
      {anim && <LoadAnim />}
      <Cursor />
      <Switch location={locationP} key={location}>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Services" component={Services}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/CarouselPortfolio" component={CarouselPage}></Route>
        <Route path="/ProjectDetails" component={ProjectDetails}></Route>
        <Route path="/Masonry" component={Masonry}></Route>
      </Switch>
    </>
  );
}
const WithRouterApp = withRouter(App);
export default WithRouterApp;
