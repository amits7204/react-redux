import React from "react";
import { Route } from "react-router-dom";
import { DashBoard } from "../component/DashBoard";
export default function Router() {
  return (
    <>
      <Route path="/dashBoard" exact render={() => <DashBoard />} />
    </>
  );
}
