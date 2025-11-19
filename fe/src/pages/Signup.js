import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validate } from "../components/EmailValidator";

function Signup() {
    const navigate = useNavigate();
    const api_URL = process.env.REACT_APP_BASE_API_URL;
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const loginPage = () => {
        navigate(`/login`)
    }

    const showPassFun = () => {
        setShowPassword(!showPassword)
    }

    const subminHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        let test = validate(user.email)

        if (user.username === "" || user.email === "" || user.password === "") {
            toast.warning("Enter Value");
            setLoading(false);
        } else if (!test) {
            toast.warning("Invalid email");
            setLoading(false);
        } else {
            try {
                let resp = await axios.post(`${api_URL}/auth/register`, user);
                if (resp.status === 201) {
                    setLoading(false);
                    toast.success(resp.data.message);
                    setUser({ email: "", username: "", password: "" });
                    loginPage();
                }
                setLoading(false);
            } catch (err) {
                if (err.response.status === 500 || err.response.status === 400) {
                    toast.error(err.response.data.message);
                    setLoading(false);
                }
            }
        } setLoading(false);
    };

    return (
        <div className="min-vh-100 d-flex align-items-center rounded">
            <div className="container mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12">
                        <div className="card">
                            <img className="img-fluid rounded"
                                src="https://images.unsplash.com/photo-1708312604109-16c0be9326cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
                                height="500"
                                alt="Brand Image" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 p-5">
                        <form className="mb-3">
                            <fieldset>
                                <legend>Signup</legend>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="username"
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        placeholder="email"
                                        value={user.email}
                                        required
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                    <>
                                        <button
                                            type="button"
                                            onClick={showPassFun}
                                            style={{ background: "transparent", border: "none", outline: "none" }}>
                                            {showPassword ? <i className="fa-regular fa-eye-slash fa-sm" /> : <i className="fa-regular fa-eye fa-sm" />}
                                        </button>
                                    </>
                                </div>
                            </fieldset>
                            <fieldset>
                                {loading ? (
                                    <div className="col-md-12 mt-3 text-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <a className="btn btn-success" onClick={subminHandler}>Signup</a>
                                )}
                            </fieldset>
                        </form>
                        <p>Already have an account? <u> <a onClick={loginPage}> Login</a></u></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;