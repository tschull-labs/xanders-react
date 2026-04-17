import WelcomePage from "./pages/welcome.tsx";
import Login from "./pages/login.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
