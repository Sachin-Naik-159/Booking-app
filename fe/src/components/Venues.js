import { useNavigate } from "react-router-dom";

function Venues() {
    const navigate = useNavigate();

    const venueDetail = () => {
        navigate(`/details`)
    };

    return (
        <>
            <div className="row">
                <div className="col-1 pt-5 mt-5 ml-5"></div>
                <div className="col-1 pt-5 mt-5 ml-5">
                    <h2 className="mb-2" style={{ textAlign: 'left' }}>Venues</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-3">
                    <div className="card" onClick={venueDetail}>
                        <img className="card-img-top" src={require("../asset/Venues/1/OlympiansDen1696830589175.webp")} alt="Olympian's Den" />
                        <div className="card-body">
                            <h5 className="card-title">Olympian's Den</h5>
                        </div>
                    </div>
                </div>

                <div className="col-1"></div>
                <div className="col-3">
                    <div className="card" onClick={venueDetail}>
                        <img className="card-img-top" src={require("../asset/Venues/1/OlympiansDen1696830589175.webp")} alt="Olympian's Den" />
                        <div className="card-body">
                            <h5 className="card-title">Olympian's Den</h5>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Venues;