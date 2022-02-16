import logo from '../../logo.svg'
import ActivityComponents from '../Activitycomponent';
import DarkMode from '../Darkmode';
import ProfileCard from '../Profilecard';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import Footer from '../Footer';

const Sidebar = () => {

    const img = {
        one: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>,
        two: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>,
        three: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>,
        four: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>,
        five: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>,
        six: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>,
        seven: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>,
        eigth: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="blue">
            <path strokeWidth={1} d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            <path strokeWidth={1} d="M9 13h2v5a1 1 0 11-2 0v-5z" />
        </svg>,
        nine: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="blue" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    }
    return (
        <>
            <div className="container">
                <div className='w-[320px] h-[350px] bg-blue-900 flex flex-col justify-start items-center ml-1	' >
                    <div className='w-28 mt-3' >
                        <img src={logo} />
                    </div>
                    <div>
                        <h1 className='text-white'>my2cents</h1>
                    </div>
                </div>

                <div className='w-[320px] h-[auto]  border-r-[1px] border-gray-300  ml-1	'>

                    <div className='mt-[-200px] '>
                        <ProfileCard />
                    </div>
                    <div className='mt-[100px]  flex justify-center'>
                        <ActivityComponents title="Home" icon={img.one} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myBook" icon={img.two} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myVid" icon={img.three} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myIdea" icon={img.four} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myJob" icon={img.five} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myPodcast" icon={img.six} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myReuse" icon={img.seven} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="mySlowfood" icon={img.eigth} />
                    </div>
                    <div className='mt-[20px] flex justify-center'>
                        <ActivityComponents title="myCM" icon={img.nine} />
                    </div>
                    <div className='border-t-[1px] w-[320px] mt-5 border-gray-300'></div>
                </div>

                <div className='w-[320px] h-[975px] flex flex-col justify-start items-center border-r-[1px] border-gray-300  ml-1'>
                    <div className='mt-5'>
                        <DarkMode />
                    </div>
                    <div className='mt-10 h-auto'>
                        <img src={banner1} width={250} className="rounded-xl h-[550px]" />
                    </div>
                    <div className='mt-10 h-9'>
                        <img src={banner2} width={250} className="rounded-xl h-[300px]" />
                    </div>
                </div>

            </div>
        </>
    );

}

export default Sidebar;