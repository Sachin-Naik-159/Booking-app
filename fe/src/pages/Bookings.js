import axios from "axios";
import FixedBar from "../components/FixedBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Booking() {
    const initialState = { _id: "1", custId: { username: "" }, venue: "", bookingDate: "2025-11-13T03:30:00.000Z", cost: "" }
    const [bookings, setBookings] = useState([initialState]);
    const api_URL = process.env.REACT_APP_BASE_API_URL;
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
    };


    let user = useSelector((state) => {
        return state.userReducer.user;
    });

    const cancleBooking = async (_id) => {
        try {
            let data = { _id: _id }
            const resp = await axios.delete(`${api_URL}/book/booking`, {
                headers: headers,
                data,
            });
            toast.success(resp.data.message)
            getBooking()
        } catch (err) { throw err }
    }

    const getBooking = async () => {
        let resp = await axios.get(`${api_URL}/book/booking/user`, { headers: headers, user })
        setBookings(resp.data)
    }

    //Table structure
    function TableHead() {
        return (
            <thead>
                <tr className="row">
                    <th className="col-1 text-center">#</th>
                    <th className="col-2 text-center">Name</th>
                    <th className="col-2 text-center">Venue</th>
                    <th className="col-3 text-center">BookingDate</th>
                    <th className="col-2 text-center">Time</th>
                    <th className="col-1 text-center">cost</th>
                    <th className="col-1 text-center">Cancel</th>
                </tr>
            </thead>
        );
    }

    useEffect(() => {
        getBooking();
    }, [])

    return <>
        <FixedBar />
        <div className="p-4"></div>
        <div className="p-5">
            <table className="table table-striped table-bordered">
                <TableHead />
                <tbody>
                    {bookings.map((e, i) => (
                        <tr className="row" key={e._id}>
                            <td className="col-1 text-center">{i + 1}</td>
                            <td className="col-2 text-center">{e.custId.username}</td>
                            <td className="col-2 text-center">{e.venue}</td>
                            <td className="col-3 text-center">{`${new Date(e.bookingDate)}`.substring(0, 16)}</td>
                            <td className="col-2 text-center">{`${new Date(e.bookingDate)}`.substring(16, 21)}</td>
                            <td className="col-1 text-center">{e.cost}</td>
                            <td className="col-1 text-center">
                                <i className="fa-regular fa-trash-can mt-1 pe-1" onClick={() => cancleBooking(e._id)} aria-hidden="true" style={{ color: "maroon" }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="p-5">
            <button type="button" className="btn btn-primary" onClick={getBooking}>Refresh</button>
        </div>
    </>
}

export default Booking;