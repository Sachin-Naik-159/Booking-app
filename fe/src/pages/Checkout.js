import axios from "axios";
import { toast } from "react-toastify";
import FixedBar from "../components/FixedBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
    const navigate = useNavigate();
    const api_URL = process.env.REACT_APP_BASE_API_URL;
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("9");

    const log = async () => {
        let token = localStorage.getItem("token")
        if (token) {
            let bookingDate = new Date(date.setHours(parseInt(time), 0, 0, 0));
            let data = {
                custId: token,
                venue: "Olympian's Den",
                bookingDate,
                cost: 400,
            }
            const postResponse = await axios.post(`${api_URL}/book/book`, data);
            toast(postResponse.data.message);
            if (postResponse.data.message === "Slot Booked") {
                navigate(`/`)
            }
        } else {
            navigate(`/login`);
            toast.error("Please Login")
        }


        // let nowTime = new Date(date.setHours(parseInt(time), 0, 0))
        // console.log(date.setHours(parseInt(time), 0, 0));

    }


    return (
        <div className="Container">
            <div className="p-3 mb-5">
                <FixedBar />
            </div>
            <div className="min-vh-100 d-flex align-items-center rounded">
                <div className="container mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <img src={require("../asset/Venues/1/OlympiansDen1696830589175.webp")} className="d-block w-100" alt="1" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h2 className="pb-1">Olympian's Den</h2>
                            <p>Kalinganagar</p>
                            <form>
                                <div className="p-2">
                                    <label htmlFor="bdate" style={{ margin: "10px" }}><b>Date: </b></label>
                                    <input type="date" id="bdate" name="bdate" value={date.toISOString().slice(0, 10)}
                                        onChange={(e) => setDate(new Date(e.target.value))}></input><br></br>
                                </div>

                                <div className="p-2">
                                    <label htmlFor="btimeDrop" style={{ margin: "10px" }}><b>Time: </b></label>
                                    <select id="btimeDrop" name="selectTime" value={time} onChange={(e) => setTime(e.target.value)}>
                                        <option value="9">09:00 AM</option>
                                        <option value="10">10:00 AM</option>
                                        <option value="11">11:00 AM</option>
                                        <option value="12">12:00 PM</option>
                                        <option value="13">01:00 PM</option>
                                        <option value="14">02:00 PM</option>
                                        <option value="15">03:00 PM</option>
                                        <option value="16">04:00 PM</option>
                                    </select>
                                </div>

                                <div className="p-2">
                                    <label htmlFor="bprice" style={{ margin: "10px" }}><b>Date: </b></label>
                                    <>₹ 400</>
                                </div>
                                <div className="p-2">
                                    <a className="btn btn-secondary" style={{ margin: "10px" }} onClick={log}>Book</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;