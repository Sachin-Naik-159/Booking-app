function Footer() {
    return (
        <div className="row pt-5">
            <div className="col-1"></div>
            <div className="col-5">
                <div className="row pt-2"></div>
                <div className="row pt-2">
                    <img src={require("../asset/new-logo-playo.png")} className="logo mt-5" alt="logo" />
                    <p className="pt-3">Your Sports Community App</p>
                </div>
            </div>
            <div className="col-3">
                <h5 className="pt-3">About Us</h5>
                <h5 className="pt-3">Contact</h5>
                <h5 className="pt-3">Careers</h5>
                <h5 className="pt-3">Partner With Us</h5>
            </div>
            <div className="col-2">
                <div className="row pt-3">
                    <div className="col-1">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-1">
                        <i className="fa-brands fa-square-facebook fa-2xl"></i>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-1">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-1">
                        <i className="fa-brands fa-square-x-twitter fa-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;