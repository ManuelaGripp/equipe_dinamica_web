import { Outlet } from "react-router";
import Header from "../components/header";

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
