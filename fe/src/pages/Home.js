import FixedBar from "../components/FixedBar";
import Footer from "../components/Footer";
import Tray from "../components/Tray";


function Home() {
    return (
        <div className="Container">
            <div className="p-3 mb-5">
                <FixedBar />
            </div>
            <Tray />
            <Footer />
        </div>
    )
}

export default Home;