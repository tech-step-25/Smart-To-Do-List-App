import { Routes, Route } from "react-router-dom";
import SideBars from "./components/shared/layouts/SideBars";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBars />}>
        <Route index element={<HomePage />} />
        <Route path="/goals">
          <Route index element="" />
          <Route path=":id" element="" />
          <Route path="create" element="" />
          <Route path="update/:id" element="" />
          <Route path="delete/:id" element="" />
        </Route>
        <Route path="/tasks">
          <Route index element="" />
          <Route path=":id" element="" />
          <Route path="create" element="" />
          <Route path="update/:id" element="" />
          <Route path="delete/:id" element="" />
        </Route>
        <Route path="*" element="" />
      </Route>
    </Routes>
  );
}

export default App;
