import { Toolbar } from "@mui/material";
import Main from "./Main/Main";
import Bar from "./Bar.jsx/Bar"
import { Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";


function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/join" element={<Join/>}/>
    </Routes>
      <Bar>
        <Toolbar>
        </Toolbar>
        </Bar>
        <Main/>
    </>
  );
}

export default App;