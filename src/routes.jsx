import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Edition } from "./pages/edition";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}>
            <Route path={"edition"} element={<Edition/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
