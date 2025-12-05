import FixedBar from "../components/FixedBar";
import Tray from "../components/Tray";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div className="Container">
            <FixedBar />
            <div className="p-5 mt-5" >
            </div>

            <div className="row">

                <div className="col-md-12 col-lg-6">
                    <img
                        src="https://plus.unsplash.com/premium_vector-1717613819574-e37b1b14c71f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="100%"
                        alt="" />
                </div>
                <div className="col-md-12 col-lg-6 text-center">
                    <h1 className="mt-5">Contact Us</h1>
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <div className="card" style={{ width: "18rem" }}>
                                <i className="fa-solid fa-phone fa-2xl card-img-top p-2"></i>
                                <div className="card-body mt-5">
                                    <h5 className="card-title">Phone</h5>
                                    <p className="card-text ">
                                        +91 9876543210 <br />
                                        +91 1234567890
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-5">
                            <div className="card" style={{ width: "18rem" }}>
                                <i className="fa-regular fa-message fa-2xl card-img-top p-2"></i>
                                <div className="card-body mt-5">
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text ">playo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;