import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute({ onlyLogged }) {
  const [changePage, setChangePage] = useState();
  const navigate = useNavigate();

  const logged = localStorage.getItem("rol") ? true : false;

  const checkIsLogged = () => {
    if (!logged) {
      navigate("/");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (onlyLogged) {
      const accessGranted = checkIsLogged();
      setChangePage(accessGranted);
    }
  }, []);

  if (changePage) {
    return <Outlet />;
  }
}
