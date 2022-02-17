const Category = () => {
    return (
        <div className="w-[390px] flex flex-col justify-center  border-b-[1px] pb-6 border-blue-600">
            <div className="flex pl-5 pr-5 justify-between items-center rounded-xl text-white h-14 bg-blue-600">
                <div>
                    <h1>Category</h1>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="w-[390px] flex flex-col justify-center ">
                <div className="flex justify-around mt-5 text-blue-400">
                    <button className="bg-gray-200 text-[14px]  rounded-xl w-16">
                        Bitcoin
                    </button>
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-16">
                        Crypto
                    </button>
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-24">
                        Blockchain
                    </button>
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-16">
                        Market
                    </button>
                </div>
                <div className="flex justify-around mt-5  text-blue-400">
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-16">
                        Politic
                    </button>
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-16">
                        Staking
                    </button>
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-20">
                        DEX
                    </button>
                    <button className="bg-gray-200 active:bg-blue-600 active:text-white rounded-xl w-24">
                        Ecosystem
                    </button>
                </div>
            </div>
            <div className="flex items-center mt-5 ml-[10px]">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-1">
                    <a href="#"> Select all categories </a>
                </div>
            </div>
        </div>
    )
}

export default Category