import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import NavBar from './components/NavBar';
import { About, Home, SingleCockTail } from 'pages';

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id" component={SingleCockTail} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
