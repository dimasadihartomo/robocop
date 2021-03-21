import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RobotList from "./pages/RobotList";
import RobotDetail from "./pages/RobotDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
        <Navbar />
        <div className="container-fluid" style={{backgroundColor: "#c2e9f2", padding: "4% 8%"}}>
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
