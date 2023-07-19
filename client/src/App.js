import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import PrivateRoute from "./components/routes/PrivateRoute";
//import PublicRoute from "./components/routes/PublicRoute";
import AboutPage from "./pages/about";
import Jops from "./pages/Jop";
import JobDetails from "./pages/jobDetailes";

function App() {
  return (
    <>
      {" "}
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            
              <HomePage />
            
          }
        />
        <Route
          path="/login"
          element={
            
              <Login />
           
          }
        />
        <Route
          path="/register"
          element={
            
              <Register />
           
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard /> } />
       <Route
          path="/about"
          element={
            
              <AboutPage />
            
          }
        />
        <Route
          path="/jobs"
          element={
           
              <Jops />
            
          }
        />
        <Route
          path="/jobs/:id"
          element={
            
              <JobDetails />
            
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
