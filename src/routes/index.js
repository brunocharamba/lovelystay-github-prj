import React from "react";
import { Routes as BrowserRoutes, Route } from "react-router-dom";

import Search from "../pages/search";
import User from "../pages/user";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Search />} />
      <Route path="/user/:id" element={<User />} />
    </BrowserRoutes>
  );
};

export default Routes;
