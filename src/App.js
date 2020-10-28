import "./App.css";
import DashBoard from "./component/DashBoard";
import Login from "./component/Login";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      {/* <DashBoard /> */}
      <Router />
    </div>
  );
}

export default App;
