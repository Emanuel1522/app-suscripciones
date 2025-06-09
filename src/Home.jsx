import { useState } from "react";
import Content from "./components/Content";
import SideMenu from "./components/SideMenu";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <SideMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

            <main className="appContent">
                <h1 className="titleStyle">Tu página confiable de suscripciones!</h1>
                <div className="contentWrapper">
                    <Content />
                </div>
            </main>
        </div>
    )
}
export default Home;