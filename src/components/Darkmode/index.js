import { useState } from 'react';
import './main.css'

const DarkMode = () => {

    const [active, setActive] = useState(true)

    const toggleButton = () => {
        setActive(!active)
    }

    return (
        <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className='ml-1'>
                <input type={"checkbox"} name="toggle" id="toggle" className="hidden" />
                <label htmlFor="toggle">
                    <div className="w-16 h-7 flex cursor-pointer items-center border-blue-400 border-[2px] rounded-lg p-1" onClick={toggleButton}>
                        <div className={(active) ? "toggle-dot w-1 h-4 rounded-[5px] bg-blue-700 shadow-md transform duration-500 ease-in-out" : "toggle-dot w-1 h-4 rounded-[5px] bg-blue-700 shadow-md transform translate-x-12 duration-500 ease-in-out"}>
                        </div>
                    </div>
                </label>
            </div >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        </div >
    );
};

export default DarkMode;
