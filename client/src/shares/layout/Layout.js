import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import Section from "./Section";

export default function Layout({ children }) {
    return (
        <div className="">
            <div className="flex justify-center">
                <header className="w-body mt-5 mb-5">
                    <Header />
                </header>
            </div>

            <div className="flex justify-center bg-black  sticky top-0 z-10">
                <nav className=" w-body border-white border-x">
                    <Navbar />
                </nav>
            </div>
            <div className="flex justify-center">
                <div className="w-body grid grid-cols-3 gap-4">
                    <main className="col-start-1 col-end-3">
                        {children}
                    </main>

                    <aside className="col-start-3 col-end-4">
                        <Aside />
                    </aside>
                </div>
            </div>
            <section className="">
                <Section />
            </section>
            <div className="flex justify-center bg-black mt-1">
                <footer className=" w-body grid justify-items-center">
                    <Footer />
                </footer>
            </div>

        </div>
    )
}