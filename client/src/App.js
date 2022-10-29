
import React, { useContext } from "react";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Topbar from './components/topbar/Topbar.jsx';
import { Context } from "./context/Context.js";
import Register from './pages//register/Register.jsx';
import Bloodrqst from "./pages/Blood Request/Bloodrqst.jsx";
import Home from './pages/home/Home.jsx';
import LogIn from './pages/login/LogIn.jsx';
import Settings from './pages/settings/Settings.jsx';
import SinglePage from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import FindDoner from './pages/findDoner/FindDoner.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Whywe from "./components/Whywe/Whywe.jsx";
import Hospital from "./components/Hospital/Hospital.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Help from "./components/Help/Help.js";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/register">
          {user?<Home />: <Register />}
      </Route>
      <Route path="/about">
          {<About />}
      </Route>
      <Route path="/login">
      {user?<Home />: <LogIn />}
      </Route>

      <Route path="/Bloodrqst">
      {user? <Bloodrqst/>: <LogIn />}
      </Route>

      <Route path="/hospital">
      {user? <Hospital/>: <LogIn />}
      </Route>
      <Route path="/help">
          {<Help />}
      </Route>

      <Route path="/whywe">
      {<Whywe/>}
      </Route>
      <Route path="/Write">
      {user? <Write/>: <LogIn />}
      </Route>
      <Route path="/settings">
      {user?<Settings />: <LogIn />}
      </Route>
      <Route path="/post/:postId">
          <SinglePage />
      </Route>
      <Route path="/contact">
      {user? <Contact/>: <LogIn />}
      </Route>
      
    
      <Footer/>
    </Router>
 
  );
}

export default App;
