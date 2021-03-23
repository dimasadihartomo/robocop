import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RobotList from "./pages/RobotList";
import RobotDetail from "./pages/RobotDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Navbar />
        <div className="container-fluid" style={{backgroundColor: "#c2e9f2", padding: "1% 6%"}}>
            <Router>
                <Switch>
                    <Route path="/" exact component={RobotList} />
                    <Route path="/user/:id" exact component={RobotDetail}/>
                </Switch>
            </Router>
        </div>
        <Footer />
    </div>
  );
}

export default App;
