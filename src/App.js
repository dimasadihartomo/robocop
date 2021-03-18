import './App.css';
import RobotList from "./pages/RobotList";
import {Provider} from "react-redux";
import store from "./configs/store";

function App() {
  return (
      <Provider store={store}>
        <div className="container-fluid" style={{backgroundColor: "blueviolet", padding: "4%"}}>
            <div className="container-fluid">
                <h1>Robot List</h1>
                <RobotList />
            </div>
        </div>
      </Provider>
  );
}

export default App;
