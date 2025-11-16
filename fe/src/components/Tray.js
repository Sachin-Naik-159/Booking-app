import Intro from "./Intro";
import Sport from "./Sport";
import Venues from "./Venues";


function Tray() {
  return (
    <div className="overflow-hidden text-center row gx-5">
      <Intro />
      <Venues />
      <Sport />
    </div>
  )
}

export default Tray;