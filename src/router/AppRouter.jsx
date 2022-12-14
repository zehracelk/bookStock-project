import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Publishers from "../pages/Publishers";
import Sales from "../pages/Sales";
import Author from "../pages/Author";
import Books from "../pages/Books";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
            <Route path="books" element={<Books />} />
            <Route path="author" element={<Author />} />
            <Route path="publishers" element={<Publishers />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;