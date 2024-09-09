import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Auth/Home";
import Layout from "./layouts/Layout";
import Login from "./pages/Public/Login";
import Partners from "./pages/Auth/Partners";
import RegisterPartner from "./pages/Auth/RegisterPartner";
import EditPartner from "./pages/Auth/EditPartner";

export default function Root(props) {
  const PublicRoute = ({ element }: { element: JSX.Element }) => {
    const isAuthenticated = !!localStorage.getItem("keepLogin");
    const isLogged = !!localStorage.getItem("user");

    return isAuthenticated || isLogged ? <Navigate to="/" /> : element;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/partners/list" element={<Partners />} />
          <Route path="/partners/register" element={<RegisterPartner />} />
          <Route path="/partners/edit/:id" element={<EditPartner />} />
        </Route>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
      </Routes>
    </Router>
  );
}
