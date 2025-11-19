import { toast } from "react-toastify";
import FixedBar from "../components/FixedBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function VenueDetail() {
    const navigate = useNavigate();
    const checkOutPage = () => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate(`/checkout`)
        } else {
            navigate(`/login`);
            toast.error("Login")
        };
    }
    return (

        <div className="Container">
            
                <FixedBar />
            
            <>
                <div className="row" >
                    <div className="col-1">
                    </div>
                    <div className="col-10 mt-5">
                        <div className="row mt-5 pt-5">
                            <div className="col-xl-8 col-lg-6 col-md-12">
                                <div>
                                    <h1 className="pb-1">Olympian's Den</h1>
                                    <p>Kalinganagar</p>
                                </div>

                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require("../asset/Venues/1/OlympiansDen1696830589175.webp")} className="d-block w-100" alt="1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require("../asset/Venues/1/OlympiansDen1696830594472.webp")} className="d-block w-100" alt="1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require("../asset/Venues/1/OlympiansDen1696830600855.webp")} className="d-block w-100" alt="1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require("../asset/Venues/1/OlympiansDen1696830608010.webp")} className="d-block w-100" alt="1" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 pt-3 mt-5">
                                <button type="button" className="btn btn-success mt-4 p-3" style={{ width: "100%" }} onClick={checkOutPage}>Book Now</button>

                                <div className="row mt-1 pt-1">
                                    <h3>Timing</h3>
                                    <p>9 AM - 4 PM</p>
                                </div>
                                <div className="row mt-1 pt-1">
                                    <h3>Location</h3>
                                    <p>1604/2254, Paikrapur, Behind BDA Colony, Phase - 2, Trident Galaxy Square, Kalinganagar, Bhubaneswar, Odisha - 751003</p>
                                </div>
                                <iframe className="row mt-1 pt-1" width="100%" height="50%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?q=1604%2F2254%2C%20Paikrapur%2C%20Behind%20BDA%20Colony%2C%20Phase%20-%202%2C%20Trident%20Galaxy%20Square%2C%20Kalinganagar%2C%20Bhubaneswar%2C%20Odisha%20-%20751003&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                            </div>
                        </div>
                        <div className="row mt-5 pt-5" >
                            <h3>Sports Available</h3>
                            <div className="card mt-3" style={{ width: "10rem" }}>
                                <img src={require("../asset/Venues/SP5.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title">Badminton</p>
                                </div>
                            </div>

                            <div className="card mt-3" style={{ width: "10rem" }}>
                                <img src={require("../asset/Venues/SP4.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title">TableTennis</p>
                                </div>
                            </div>

                            <div className="card mt-3" style={{ width: "10rem" }}>
                                <img src={require("../asset/Venues/SP56.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title">Cricket</p>
                                </div>
                            </div>


                            <div className="card mt-3" style={{ width: "10rem" }}>
                                <img src={require("../asset/Venues/SP2.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title">Football</p>
                                </div>
                            </div>



                        </div>
                        <div className="row mt-5 pt-5" >
                            <h3 >About Venue</h3>
                            <p className="mt-3">Badminton:</p>
                            <p>- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.<br></br>
                                - Sports equipment available on rent: Rackets, Shoes.<br></br>
                                - Socks are compulsory for rented shoes. Please carry your own.<br></br>
                                - Barefoot play is strictly prohibited.<br></br>
                                - A maximum of 4 members per booking per badminton court is admissible.</p>

                            <p className="mt-3">Table Tennis:</p>
                            <p>- Non Marking Shoes compulsory for Table Tennis. Shoes must be worn after entering the facility.<br></br>
                                - Sports equipment available on rent: Rackets, Balls.<br></br>
                                - Barefoot play is strictly prohibited.<br></br>
                                - A maximum of 4 members per booking per TT Table is admissible.</p>
                        </div>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </>
            <Footer />
        </div>


    )
}

export default VenueDetail;