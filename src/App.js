import "./App.css";
import Employes from "./Component/Employes";
import { Route, Routes } from "react-router-dom";
import Add from "./Component/Add";
import Edit from "./Component/Edit";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Employes />}>
          {" "}
        </Route>
        <Route path="/create" element={<Add />}>
          {" "}
        </Route>
        <Route path="/edit" element={<Edit />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
