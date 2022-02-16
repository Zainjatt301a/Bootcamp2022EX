const Showingpostscount = () => {
    return (
        <div className='flex flex-col w-[460px] h-[100px] p-5 rounded-2xl mt-2 bg-blue-600'>
            <div className=' flex justify-between  '>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <h1 className='text-white ml-5'>Crypto Winter's</h1>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>

            </div>
            <div className='flex mt-3 ml-1 items-center'>
                <h3 className='text-white text-[14px]'>#Bitcoin</h3>
                <div className='ml-2 flex justify-center items-center bg-white text-gray-500 text-[16px] rounded-2xl h-[23px] w-[85px]'>
                    <h3>1253 Posts</h3>
                </div>
            </div>
        </div>
    )
}
export default Showingpostscount