import { useState } from "react"

const Category = () => {
    const [active, setActive] = useState(true)
    return (
        <div className="md:w-11/12 w-8/12 flex flex-col justify-center  border-b-[1px] pb-6 border-blue-600">
            <div className="flex pl-5 pr-5 justify-between items-center rounded-xl text-white h-14 bg-blue-600">
                <div>
                    <h1>Category</h1>
                </div>
                <div>
                    <button onClick={() => setActive(!active)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={(active) ? "h-6 w-6 cursor-pointer transition duration-300" : "h-6 w-6 cursor-pointer rotate-180 transition duration-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={(active) ? "w-full flex flex-col justify-center " : "hidden"}>
                <div className="flex justify-around mt-5 text-blue-400">
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Bitcoin
                    </button>
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Crypto
                    </button>
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Blockchain
                    </button>
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Market
                    </button>
                </div>
                <div className="flex justify-around mt-5  text-blue-400">
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Politic
                    </button>
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Staking
                    </button>
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        DEX
                    </button>
                    <button className="bg-gray-200 md:text-[14px] text-[10px]   rounded-xl md:w-16 w-12">
                        Ecosystem
                    </button>
                </div>
            </div>

            <div className="flex items-center mt-5">
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