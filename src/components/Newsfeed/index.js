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
import { useState } from "react";
import { getPost } from '../../config/firebase'
import { useEffect } from "react";
const Newsfeed = () => {

    const [post, setPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)


    useEffect(async () => {
        const tempPosts = await getPost()
        setPost(tempPosts)
    }, [])


    // console.log(post, "POSTSSSSSSSSSSSSSS");

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (



        <div className='flex w-full'>
            <div>
                <div className='m-5'>
                    <img src={banner3} className=" rounded-2xl sm:w-[100%] w-[100%] h-[20%]" />
                </div>
                <div className='m-5'>
                    <Showingpostscount />
                </div>
                <div className='m-5'>
                    <Postsfilter />
                </div>
                <div className='flex flex-col items-center'>


                    {currentPosts.map((item) => {

                        return <Post item={item} />
                    })}


                    <div>
                        <div className="flex justify-center">
                            <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={paginate} />
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

        </div>

    )
}

export default Newsfeed