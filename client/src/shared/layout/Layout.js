import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../routes/FEConstantRoutes";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import Section from "./Section";

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-1 font-text">
      <div className="justify-center hidden sm:flex">
        <header className="w-body mt-5 mb-5">
          <Header />
        </header>
      </div>

      <div className="flex justify-center z-50 sticky top-0 bg-black">
        <nav className=" w-body border-white border-x ">
          <Navbar action={() => setShowMenu(!showMenu)} />
          {showMenu ? (
            <div className="w-full bg-black border-t border-gray-200 block sm:hidden" onClick={() => { setShowMenu(!showMenu) }} onMouseLeave={()=>{setShowMenu(!showMenu)}}>
              <ul className="text-white font-text">
                <li className="hover:bg-red-500 px-2 py-1 block">
                  <Link to="/" >
                    <span className="hover:border-b-2 border-white ">Trang chủ</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 px-2 py-1 block">
                  <Link to={FE_CATEGORY_CONSTANT_ROUTES.hot.path}>
                    <span className="hover:border-b-2 border-white x">Tin nóng</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 px-2 py-1 block">
                  <Link to={FE_CATEGORY_CONSTANT_ROUTES.new.path}>
                    <span className="hover:border-b-2 border-white ">Tin mới</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 px-2 py-1 block">
                  <Link to={FE_CATEGORY_CONSTANT_ROUTES.world_travel.path}>
                    <span className="hover:border-b-2 border-white ">Thế giới</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 px-2 py-1 block">
                  <Link to={FE_CATEGORY_CONSTANT_ROUTES.sport.path}>
                    <span className="hover:border-b-2 border-white ">Thể thao</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 px-2 py-1 block">
                  <Link to={FE_CATEGORY_CONSTANT_ROUTES.technology.path}>
                    <span className="hover:border-b-2 border-white ">Công nghệ</span>
                  </Link>
                </li>
              </ul>
            </div>) : ""}
        </nav>




      </div>
      <div className="flex justify-center">
        <div className="w-body p-1 md:grid md:grid-cols-3 md:gap-1 md:p-0 lg:gap-4 lg:p-4">
          <main className="md:col-start-1 md:col-end-3 ">
            <Outlet />
          </main>

          <aside className="hidden md:col-start-3 md:col-end-4 md:block">
            <Aside />
          </aside>
        </div>
      </div>
      <section className="mx-1">
        <Section />
      </section>
      <div className="flex justify-center bg-black mt-1  mx-1">
        <footer className=" w-body grid justify-items-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
