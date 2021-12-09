import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <h2>TV APPS</h2>
      <Link to="/netflix">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
          alt="Netflix logo"
        />
      </Link>
      <Link to="/HBOMax">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
          alt="HBO MAX logo"
        />
      </Link>
      <Link to="/hulu">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          alt="Hulu logo"
        />
      </Link>
      <Link to="/primeVideo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
          alt="Prime Video logo"
        />
      </Link>

      <Switch>
        <Route exact path="/:id">
          <Child />
        </Route>
      </Switch>
    </Router>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  let params = useParams();
  let id = params.id;

  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}

// https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg
// https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg
// https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg
// https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png
