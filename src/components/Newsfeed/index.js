import banner3 from '../../assets/banner3.jpg'
import Postsfilter from '../Postsfilter'
import Showingpostscount from '../Showingpostscount'
const Newsfeed = () => {
    return (
        <div className='w-[460px]'>
            <div>
                <img src={banner3} className=" rounded-2xl w-[460px] h-[190px]" />
            </div>
            <Showingpostscount />
            <Postsfilter />
        </div>
    )
}

export default Newsfeed