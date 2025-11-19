import { useNavigate } from "react-router-dom";

function Venues() {
    const navigate = useNavigate();

    const venueDetail = () => {
        navigate(`/details`)
    };

    return (
        <>
            <div className="row" style={{backgroundColor:"#ffffffe0"}}>
                <div className="col-1 pt-3 mt-5 ml-5"></div>
                <div className="col-1 pt-3 mt-5 ml-5">
                    <h2 className="mb-2" style={{ textAlign: 'left' }}>Venues</h2>
                </div>
            </div>
            <div className="row pb-5" style={{backgroundColor:"#ffffffa1"}}>
                <div className="col-1"></div>


                <div className="col-10 mb-5">
                <div className="row">

                    <div className="col-xl-3 col-lg-4 col-md-5 mt-2 pt-2">
                        <div className="card" onClick={venueDetail}>
                            <h5 className="card-title">Olympian's Den</h5>
                            <img className="card-img-top glow rounded" src={require("../asset/Venues/1/OlympiansDen1696830589175.webp")} alt="Olympian's Den" />
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-5 mt-2 pt-2">
                        <div className="card" onClick={venueDetail}>
                            <h5 className="card-title">OD33 Sports Arena</h5>
                            <img className="card-img-top glow rounded" src={require("../asset/Venues/2/OD33SportsArena1744131595506.webp")} alt="Olympian's Den" />
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-5 mt-2 pt-2">
                        <div className="card" onClick={venueDetail}>
                            <h5 className="card-title">Olympian's Den</h5>
                            <img className="card-img-top glow rounded" src={require("../asset/Venues/1/OlympiansDen1696830589175.webp")} alt="Olympian's Den" />
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-5 mt-2 pt-2">
                        <div className="card" onClick={venueDetail}>
                            <h5 className="card-title">OD33 Sports Arena</h5>
                            <img className="card-img-top glow rounded" src={require("../asset/Venues/2/OD33SportsArena1744131595506.webp")} alt="Olympian's Den" />
                        </div>
                    </div>

                </div>
                </div>


                <div className="col-1"></div>
                

            </div>

        </>
    )
}

export default Venues;