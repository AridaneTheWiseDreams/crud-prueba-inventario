import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute({ onlyLogged }) {
  const [changePage, setChangePage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("rol") ? true : false;

    const checkIsLogged = () => {
      if (!logged) {
        navigate("/");
        return false;
      }

      return true;
    };

    if (onlyLogged) {
      const accessGranted = checkIsLogged();
      setChangePage(accessGranted);
    }
  }, [onlyLogged, navigate]);

  if (changePage) {
    return <Outlet />;
  }
}
