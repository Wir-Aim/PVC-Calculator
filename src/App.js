import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import DockLeveller from "./components/DockLeveller/DockLeveller";
import PDF from "./components/PDF/PDF";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dockLeveller' component={DockLeveller} />
        <Route path='/PDF' component={PDF} />
      </Switch>
    </>
  );
}

export default App;
