import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const api_URL = process.env.REACT_APP_BASE_API_URL;
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({ email: "", password: "" });

    const signupPage = () => {
        navigate(`/signup`)
    }
    const loginPage = () => {
        navigate(`/`)
    }


    const subminHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (user.email === "" || user.password === "") {
            toast.warning("Enter Value");
            setLoading(false);
        } else {
            try {
                let resp = await axios.post(`${api_URL}/auth/login`, user);
                if (resp.status === 200) {
                    setLoading(false);
                    //Authentication header
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + resp.data.result.token;

                    toast.success(resp.data.message);
                    localStorage.setItem("token", resp.data.result.token);
                    localStorage.setItem("user", JSON.stringify(resp.data.result.user));
                    dispatch({ type: "LOGIN_SUCCESS", payload: resp.data.result.user });
                    navigate(`/`)
                    setLoading(false);
                }
            } catch (err) {
                if (err.response.status === 401) {
                    toast.error(err.response.data.message);
                    setLoading(false);
                }
            }
        }
        setLoading(false);
    }

    return (
        <div className="min-vh-100 d-flex align-items-center rounded">
            <div className="container mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <div className="card">
                            <img className="img-fluid rounded"
                                src="https://images.unsplash.com/photo-1666193183350-2431bab722c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
                                height="500"
                                alt="Brand Image" />
                        </div>
                    </div>
                    <div className="col-6">
                        <form className="mb-3">
                            <fieldset>
                                <legend>Login</legend>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        placeholder="email"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        placeholder="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
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
                                    <div className="row">
                                        <div className="col-2">
                                            <a className="btn btn-primary" onClick={subminHandler}>Login</a>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-1">
                                            <a className="btn btn-secondary" onClick={loginPage}>Guest</a>
                                        </div>
                                    </div>
                                )}
                            </fieldset>
                        </form>
                        <p>Don't have an account ? <a onClick={signupPage}> Register Here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;