import FixedBar from "../components/FixedBar";
import Footer from "../components/Footer";

function About() {

    // let style = {
    //     backgroundImage: `url(${"https://plus.unsplash.com/premium_vector-1689096749175-7eb7f4d347ef?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     width: "100vw"
    // }
    return (
        <div className="Container">
            <FixedBar />
            <div className="p-5 mt-5" >
            </div>

            <div className="row">

                <div className="col-md-12 col-lg-6">
                    <img
                        src="https://plus.unsplash.com/premium_vector-1718407978020-37baf5de0eac?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="100%"
                        alt="" />
                </div>
                <div className="col-md-12 col-lg-6 text-center">
                    <h1 className="mt-5">About Us</h1>
                    <p style={{ fontSize: "20px", color: "#444242ea" }}>World's #1 Sports Activities Enabler</p>
                    <p style={{ fontSize: "20px", color: "#444242a9" }}>We are a one-stop platform to help sports enthusiasts meet playpals, discover venues, skill-up their game, manage their activities seamlessly.World's #1 Sports Activities Enabler</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;