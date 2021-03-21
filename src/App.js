import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RobotList from "./pages/RobotList";
import RobotDetail from "./pages/RobotDetail";

function App() {
  return (
    <div className="container-fluid" style={{backgroundColor: "#fff6e6", padding: "4%"}}>
        <div className="container-fluid">
            <h1>Robot List</h1>
            <Router>
                <Switch>
                    <Route path="/" exact component={RobotList} />
                    <Route path="/user/:id" exact component={RobotDetail}/>
                </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
