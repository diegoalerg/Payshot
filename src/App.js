import "./App.css";
import Login from "./component/Login/Login";
import { Remitance } from "./component/Remitance/Remitance";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Send from "./pages/Send";
import Receive from "./pages/Receive";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Login />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Remitance />} />
            <Route path="/send" element={<Send />} />
            <Route path="/receive" element={<Receive />} />
          </Routes>
        </main>
        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
