import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_DASHBOARD } from "../constants/routes";

const ProtectedRoute = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate(ROUTE_DASHBOARD);
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? props.children : null}</>;
};

export default ProtectedRoute;
