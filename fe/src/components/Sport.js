function Sport() {
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row pt-5 mt-5">
                    <h2 className="mb-2" style={{ textAlign: 'left' }}>Popular Sports</h2>

                    <div className="col-2">
                        <div className="card">
                            <img className="card-img-top" src={require("../asset/badminton_new.avif")} alt="Badminton" />
                            <div className="card-body">
                                <h5 className="card-title">Badminton</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img className="card-img-top" src={require("../asset/cricket_new.avif")} alt="Cricket" />
                            <div className="card-body">
                                <h5 className="card-title">Cricket</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img className="card-img-top" src={require("../asset/football_new.avif")} alt="Football" />
                            <div className="card-body">
                                <h5 className="card-title">Football</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img className="card-img-top" src={require("../asset/swimming_new.avif")} alt="Swimming" />
                            <div className="card-body">
                                <h5 className="card-title">Swimming</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img className="card-img-top" src={require("../asset/table_tennis_new.avif")} alt="TableTennis" />
                            <div className="card-body">
                                <h5 className="card-title">TableTennis</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img className="card-img-top" src={require("../asset/tennis_new.avif")} alt="Tennis" />
                            <div className="card-body">
                                <h5 className="card-title">Tennis</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1"></div>
        </>
    )
}

export default Sport;