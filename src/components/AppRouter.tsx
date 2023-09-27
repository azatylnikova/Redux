import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "..";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = props => {
  const { user } = useContext(Context);

  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component}></Route>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component}></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
