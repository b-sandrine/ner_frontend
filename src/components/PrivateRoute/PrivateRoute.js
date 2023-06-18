import authService from "../../auth/authService";
import { Route, useNavigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();
    const navigate = useNavigate();

  if(!isAuthenticated) {
    navigate("/login", {replace: true})
    return null;
  }

  return <Route {...rest} element={<Component />}/>;

}

export default PrivateRoute;
