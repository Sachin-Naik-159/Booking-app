import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const about = () => {
        navigate(`/about`)
    }
    const contact = () => {
        navigate(`/contact`)
    }

    return (
        <div className="row pt-3" style={{ backgroundColor: "#2f7099" }}>
            <div className="col-1"></div>
            <div className="col-lg-5 col-sm-5">
                <div className="row pt-2"></div>
                <div className="row pt-2" style={{ marginLeft: "10px" }} >
                    <img src={require("../asset/new-logo-playo.png")} className="logo mt-5" alt="logo" />
                    <p className="pt-3">Your Sports Community App</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" style={{ marginLeft: "20px" }}>
                <h5 className="pt-3" onClick={about}>About Us</h5>
                <h5 className="pt-3" onClick={contact}>Contact</h5>
                <h5 className="pt-3">Careers</h5>
                <h5 className="pt-3">Partner With Us</h5>
            </div>
            <div className="col-lg-2 ">
                <div className="row pt-3">
                    <div className="col-lg-1 col-md-1 col-2">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-lg-1 col-md-1 col-2">
                        <i className="fa-brands fa-square-facebook fa-2xl"></i>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-lg-1 col-md-1 col-2">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-lg-1 col-md-1 col-2">
                        <i className="fa-brands fa-square-x-twitter fa-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;