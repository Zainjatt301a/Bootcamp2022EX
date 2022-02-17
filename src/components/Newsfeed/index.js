import banner3 from '../../assets/banner3.jpg'
import Postsfilter from '../Postsfilter'
import Showingpostscount from '../Showingpostscount'
import Navbar from '../Navbar'
import Post from '../Post'
import Pagination from '../Pagination'
import Monitizebutton from '../Monitizebutton'
import Title from '../Title'
import Texteditor from '../Texteditor'
import Rightsidebar from '../Rightsidebar'

const Newsfeed = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[100%] mt-5 border-t-[1px] border-blue-400"></div>
            <div className='flex'>
                <div>
                    <div className='m-5'>
                        <img src={banner3} className=" rounded-2xl w-[460px] h-[190px]" />
                    </div>
                    <div className='m-5'>
                        <Showingpostscount />
                    </div>
                    <div className='m-5'>
                        <Postsfilter />
                    </div>
                    <div>


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
                            <div className="flex justify-center mt-5 ml-5">
                                <Texteditor />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <Rightsidebar />
                </div>
            </div>
        </div>
    )
}

export default Newsfeed