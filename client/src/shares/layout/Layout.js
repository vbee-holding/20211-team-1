import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import Section from "./Section";

export default function Layout({children}){
    return(
        <div className="grid grid-cols-12 gap-3">

            <header className="mt-20 mb-10 col-start-2 col-end-12">
                <Header/>
            </header>
            <nav className="col-start-2 col-end-12">
                <Navbar />
            </nav>

            <main className="col-start-2 col-end-9">
                {children}
            </main>

            <aside className="col-start-9 col-end-12">
                <Aside/>
            </aside>
            <section className="col-start-1 col-end-13">
                <Section/>
            </section>
            <footer className="grid justify-items-center col-start-1 col-end-13">
                <Footer/>
            </footer>

        </div>
    )
}