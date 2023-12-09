import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import React from "react";

function App() {
  const router = useRoutes(routes);
  const url = router.props.routeContext.matches[0].pathname;

  return (
    <>
      <Navbar />
      {url === "/" ? <Landing /> : null}
      <div>{router}</div>;
      <Footer />
    </>
  );
}

export default App;
