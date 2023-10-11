import { Outlet } from "react-router-dom";

import Catalogue from "../components/Catalogue/Catalogue";
import Header from "../components/Layout/Header";
import SideNav from "../components/Layout/SideNav";

function RootLayout() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideNav />
        <main className="main">
          <Catalogue>
            <Outlet />
          </Catalogue>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
