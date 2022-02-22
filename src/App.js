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
import Rightsidebar from "./components/Rightsidebar/index.js";
import Recenttopics from "./components/Recenttopics/index.js";
function App() {
  return (
    // <div>
    //   <div className="flex">

    //     <Sidebar />

    //     <Newsfeed />

    //   </div>
    //   {/* <ProfileCard /> */}
    //   {/* <ActivityComponents /> */}
    //   {/* < DarkMode /> */}
    //   {/* <Footer /> */}
    //   {/* <Navbar /> */}
    // <div >
    //   <Newsfeed />
    // </div>
    //   {/* <Post /> */}
    //   {/* <Pagination /> */}
    //   {/* <Monitizebutton /> */}
    //   {/* <Texteditor /> */}
    //   {/* <Rightsidebar /> */}
    //   {/* <Recenttopics /> */}
    // </div>
    <div className="flex flex-col">
      <div className="flex w-full  ">
        <aside className=" w-1/4 sm:block hidden	">
          <Sidebar />
        </aside>
        <div className="sm:w-3/4 w-full  h-full">
          <header className='w-full h-24'>
            <Navbar />
          </header>
          <div className='flex w-full border-t-[1px] border-gray-300'>
            <div className='sm:w-8/12 w-11/12'>
              <Newsfeed />
            </div>
            <div className='w-4/12 sm:block hidden'>
              <Rightsidebar />
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>



  );

}

export default App;
