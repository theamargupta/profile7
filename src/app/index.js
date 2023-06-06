import React, { Suspense } from "react";
import "./index.scss";
import AppRoute from "../Router";
import Loader from "../Components/Loader";

const App = () => (
  <Suspense fallback={<Loader />}>
    <AppRoute />
  </Suspense>
);
export default App;
