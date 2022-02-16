import Sidebar from "./components/Sidebar/index.js";
import ProfileCard from "./components/Profilecard/index.js";
import ActivityComponents from "./components/Activitycomponent/index.js";
import DarkMode from '../src/components/Darkmode/index'
import Footer from "./components/Footer/index.js";
import Navbar from "./components/Navbar/index.js";
import Newsfeed from "./components/Newsfeed/index.js";
import Post from "./components/Post/index.js";
import Pagination from "./components/Pagination/index.js";
import Monitizebutton from "./components/Monitizebutton/index.js";
import Title from "./components/Title/index.js";
import Texteditor from "./components/Texteditor/index.js";
function App() {
  return (
    <div>
      <div className="flex items-start">
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <div className="w-[115%] mt-5 border-t-[1px] border-blue-400"></div>
          <div>
            <Post />
          </div>
          <div>
            <Post />
          </div>
          <div>
            <Post />
          </div>
          <div className="w-[460px]">
            <div className="flex justify-center">
              <Pagination />
            </div>
            <div className="flex justify-center">
              <Monitizebutton />
            </div>
            <div className="flex justify-center mt-5">
              <Title name="Create a post" />
            </div>
          </div>
        </div>
      </div>
      {/* <ProfileCard /> */}
      {/* <ActivityComponents /> */}
      {/* < DarkMode /> */}
      {/* <Footer /> */}
      {/* <Navbar /> */}
      {/* <Newsfeed /> */}
      {/* <Post /> */}
      {/* <Pagination /> */}
      {/* <Monitizebutton /> */}
      {/* <Texteditor /> */}
    </div>
  );

}

export default App;
