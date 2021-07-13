import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ReportDash from "./Pages/ReportDash";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={ReportDash} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
