function Intro() {
    return (
        <>
            <div className="col-6">
                <div className="p-5 mt-5">
                    <h1>Book sports venues.<br></br>
                        Join games.<br></br>
                        Find trainers near you.</h1>
                    <p>The World’s Largest Sports Community to Book <br></br>Venues, Find Trainers, and Join Games Near you.</p>
                </div>
            </div>
            <div className="col-6">
                <div className="p-3"><img src={require("../asset/hero_right_top.avif")} className="" style={{ width: "40rem" }} alt="advertisement" /></div>
            </div>
        </>
    )
}

export default Intro;