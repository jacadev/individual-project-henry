import { Route } from "react-router-dom";
import { Home, Landing, Detail, FormView } from "./views";
import NavBar from "./components/nav-bar/NavBar.jsx";
import Footer from "./components/footer/Footer";
import "./App.css";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <div className="container">
        {location.pathname !== "/" && <NavBar />}
        <Route path="/home" component={Home} />
        <Route path="/detail/:dogId" component={Detail} />
        <Route path="/create" component={FormView} />
        {location.pathname !== "/" && <Footer />}
      </div>
      <Route exact path="/" component={Landing} />
    </div>
  );
};

export default App;
