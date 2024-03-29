import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"


import { doctorData } from "./helpers/data";

function App() {
  return (
    <div className="App">
      <Home data= {doctorData}/>
    </div>
  );
}

export default App;
