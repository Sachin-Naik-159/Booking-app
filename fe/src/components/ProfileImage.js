import "./FixedBar.css"
function ProfileImage(value) {
    let name = value.name

    function srtingToColor(string) {
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = "#";
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    }
    const initial = `${name[0]}`
    const fName = `${name[0]} ${name[1]}`
    const backgroundColor = srtingToColor(fName)
    return (
        <div className="profile-image" style={{ backgroundColor }}>{initial}</div>
    );
}

export default ProfileImage;