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
                <img src={require("../asset/New_Project.jpg")} style={{marginLeft:"20px"}} className="imgcss rounded" alt="advertisement" />
                    {/* <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-5">
                        <img src={require("../asset/hero_left.avif")} className=" rounded" alt="advertisement" />
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-7">
                        <img src={require("../asset/hero_right_top.avif")} className=" rounded" alt="advertisement" />
                        <img src={require("../asset/hero_right_bottom.avif")} className=" rounded" alt="advertisement" />
                        </div> 
                    </div>*/}
            </div>
        </>
    )
}

export default Intro;