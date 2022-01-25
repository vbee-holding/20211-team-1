import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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

      <div className="flex justify-center  sm:sticky sm:top-0 bg-black">
        <nav className=" w-body border-white border-x ">
          <Navbar action={()=>setShowMenu(!showMenu)}/>
          {showMenu ? (
            <div className="w-full bg-black border-t border-gray-200 block sm:hidden" onClick={()=>{setShowMenu(!showMenu)}}>
              <ul className="text-white font-text">
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/" >
                    <span className="hover:border-b-2 border-white ">Trang chủ</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/category/hot">
                    <span className="hover:border-b-2 border-white">Tin nóng</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/category/new">
                    <span className="hover:border-b-2 border-white ">Tin mới</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/category/video">
                    <span className="hover:border-b-2 border-white ">Video</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/category/sport">
                    <span className="hover:border-b-2 border-white ">Thể thao</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/category/technology">
                    <span className="hover:border-b-2 border-white ">Công nghệ</span>
                  </Link>
                </li>
                <li className="hover:bg-red-500 p-1 block">
                  <Link to="/">
                    <span className="hover:border-b-2 border-white ">Chủ đề khác</span>
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
