import FixedBar from "../components/FixedBar";
import Footer from "../components/Footer";
import Tray from "../components/Tray";


function Home() {
    return (
        <div className="Container">
                <FixedBar />
            <div className="p-3 mb-5">
            </div>
            <Tray />
            <Footer />
        </div>
    )
}

export default Home;