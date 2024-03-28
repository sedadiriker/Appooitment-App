import Home from "./pages/Home";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { doctorData } from "./helpers/data";

function App() {
  return (
    <div className="App">
      <Home data= {doctorData}/>
    </div>
  );
}

export default App;
