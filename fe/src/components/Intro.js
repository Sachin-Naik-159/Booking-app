import "./Intro.css"
function Intro() {
    return (
        <>
            <div className="col-lg-6 col-md-12">
                <div className="p-5 mt-5">
                    <h1>Book sports venues.<br></br>
                        Join games.<br></br>
                        Find trainers near you.</h1>
                    <p>The World’s Largest Sports Community to Book <br></br>Venues, Find Trainers, and Join Games Near you.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="p-3"><img src={require("../asset/hero_right_top.avif")} className="imgcss" alt="advertisement" /></div>
            </div>
        </>
    )
}

export default Intro;