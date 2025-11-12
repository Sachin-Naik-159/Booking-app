import "./FixedBar.css"
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function FixedBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let admin = false;

    let user = useSelector((state) => {
        return state.userReducer.user;
    });
    if (user) {
        admin = user.isAdmin;
    }

    const loginPage = () => {
        navigate(`/login`)
    };
    const home = () => {
        navigate(`/`)
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        toast.success("Logged Out");
        admin = false;
    };

    useEffect(() => {
        console.log(admin);

    }, [])

    return (
        <div className="fixed-bar row p-1">
            <div className="col-11">
                <img src={require("../asset/new-logo-playo.png")} className="logo" alt="logo" onClick={home} />
            </div>
            <div className="col-1 dropdown">
                <i className=" login fa-regular fa-user fa-2xl mt-2 pt-3 mr-5 pr-5" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item">Bookings</a></li>
                    {admin ? (
                        <li><a className="dropdown-item">Admin Panel</a></li>
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