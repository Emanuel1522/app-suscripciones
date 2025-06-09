import Content from "./components/Content";
import SideMenu from "./components/sideMenu";

const Home = () => {
    return (
        <div className="app">
            <SideMenu />
            <main className="appContent">
                <h1 className="titleStyle">Tu pagina confiable de suscripciones!</h1>
                <div className="contentWrapper">
                    <Content />
                </div>
            </main>
        </div>
    )
}
export default Home;