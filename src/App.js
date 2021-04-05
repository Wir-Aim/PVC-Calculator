import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import DockLeveller from "./components/DockLeveller/DockLeveller";
import PDF from "./components/PDF/PDF";
// import PDF2 from "./components/PDF2/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dock' component={DockLeveller} />
        <Route path='/pdf' component={PDF} />
        {/* <Route path='/pdf2' component={PDF2} /> */}
      </Switch>
    </>
  );
}

export default App;
