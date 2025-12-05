import "./FixedBar.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "./ProfileImage";

function FixedBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let type = window.location.pathname.split("/")[1];

    let admin = false;

    let user = useSelector((state) => {
        return state.userReducer.user;
    });
    if (user) {
        admin = user.isAdmin;
    }

    const booking = () => {
        navigate(`/booking`)
    }
    const adminPanel = () => {
        navigate(`/adminPanel`)
    }
    const loginPage = () => {
        navigate(`/login`)
    };
    const home = () => {
        navigate(`/`)
    };

    const handleLogout = () => {
        if (type === "type" || type === "adminPanel" || type === "checkout" || type === "booking") {
            home()
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        toast.success("Logged Out");
        admin = false;
    };

    return (
        <div className="fixed-bar row p-3" style={{ backgroundColor: "#2f7099" }}>
            <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                <img src={require("../asset/new-logo-playo.png")} className="logo" alt="logo" onClick={home} />
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 dropdown">
                {/* <i className=" login fa-regular fa-user fa-2xl mt-2 pt-3 mr-5 pr-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" /> */}
                <button type="button" style={{ background: "transparent", border: "none", outline: "none" }} data-bs-toggle="dropdown" aria-expanded="false">
                    {user.username === undefined ? (
                        <i className="fa-regular fa-user fa-2xl mt-2 pt-4 mb-2 pb-2" type="button" />
                    ) : (
                        <ProfileImage name={user.username} />
                    )}
                </button>
                <ul className="dropdown-menu">
                    {user.isAdmin !== undefined ? (
                        <li><a className="dropdown-item" onClick={booking}>Bookings</a></li>
                    ) : (
                        <></>
                    )}
                    {admin ? (
                        <li><a className="dropdown-item" onClick={adminPanel}>Admin Panel</a></li>
                    ) : (
                        <></>
                    )}
                    <li>
                        {typeof user.isAdmin === "undefined" ? (
                            <a className="dropdown-item" onClick={loginPage}>Login</a>
                        ) : (
                            <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FixedBar;