import Category from "../Category"
import Recenttopics from "../Recenttopics"

const Rightsidebar = () => {
    return (
        <div className="w-full mt-5">
            <Category />
            <Recenttopics />
        </div>
    )
}

export default Rightsidebar