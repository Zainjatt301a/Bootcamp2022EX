import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(true)
    let placeholder = "search topic,book,video,idea,talent,podcast";
    const openProfile = () => {
        if (active) {
            setActive(!active)

        }
    }
    return (
        <div className=" flex w-11/12  items-center">
            <div className="w-full border-[1px] m-4 flex justify-center items-center  border-blue-300 rounded-2xl h-[30px]">
                <button onClick={() => alert("Search")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <input type={"search"} placeholder={placeholder} className="w-full placeholder:text-blue-500 placeholder:font-thin placeholder:text-[15px] pl-2 outline-none" />
                <button onClick={() => alert("Filter")}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </button>
            </div>
            <div className="flex">
                <div className="ml-5">
                    <button onClick={() => alert("Notification")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                </div>
                <div className="ml-5">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div>
                <div className="w-[90%] ml-10 h-8 flex items-center rounded-2xl border-[1px] border-blue-300">
                    <div >
                        <img src="https://im.indiatimes.in/content/2021/May/intro-1587390568_6092721e5baf5.jpg?w=725&h=408" className=" rounded-full h-[25px]  w-[25px] ml-[4px]" />
                    </div>
                    <div>
                        <button onClick={openProfile}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 ml-2 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Navbar