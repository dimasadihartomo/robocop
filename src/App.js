import './App.css';
import RobotList from "./pages/RobotList";

function App() {
  return (
    <div className="container-fluid" style={{backgroundColor: "blueviolet", padding: "4%"}}>
        <div className="container-fluid">
            <h1>Robot List</h1>
            <RobotList />
        </div>
    </div>
  );
}

export default App;
