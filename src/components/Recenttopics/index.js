import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Topic from "../Topic"

const Recenttopics = () => {
    return (
        <div className=" bg-gray-200 rounded-[10px] md:w-11/12 w-9/12 pb-3">
            <div className="bg-blue-700 rounded-t-[10px] h-16 flex justify-between items-center">
                <div className="ml-3">
                    <h2 className="text-white">Recent Topics</h2>
                </div>
                <div className="flex items-center justify-between w-[80px] border-[1px] border-white rounded text-white p-[2px] mr-3">
                    <h4>Top</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
            </div>
            <div>
                <Topic title="Crypto Winter's" count="1243" />
                <Topic title="Crypto Wars" count="1243" />
                <Topic title="Lionel Messi sells NFT'S" count="1243" />
                <Topic title="Reasons to use bitcoin for transactions" count="1243" />
                <Topic title="Elon Musk has mad it off Earth" count="1243" />
                <Topic title="Satoshi's Evolution" count="1243" />
                <Topic title="Reasons to use bitcoin for transaction" count="1243" />
                <Topic title="Why can't bitcoin be deflated" count="1243" />
                <Topic title="How does 'Game of thrones' Realted to bitcoin in realtime" count="1243" />
                <Topic title="Crypto Winter's" count="1243" />
                <Topic title="Crypto Wars" count="1243" />
                <Topic title="Lionel Messi sells NFT'S" count="1243" />
                <Topic title="Reasons to use bitcoin for transactions" count="1243" />
                <Topic title="Elon Musk has mad it off Earth" count="1243" />
                <Topic title="Satoshi's Evolution" count="1243" />
                <Topic title="Reasons to use bitcoin for transaction" count="1243" />
                <Topic title="Why can't bitcoin be deflated" count="1243" />
                <Topic title="How does 'Game of thrones' Realted to bitcoin in realtime" count="1243" />
                <Topic title="Crypto Winter's" count="1243" />
                <Topic title="Crypto Wars" count="1243" />
                <Topic title="Lionel Messi sells NFT'S" count="1243" />
                <Topic title="Reasons to use bitcoin for transactions" count="1243" />
                <Topic title="Elon Musk has mad it off Earth" count="1243" />
                <Topic title="Satoshi's Evolution" count="1243" />
                <Topic title="Reasons to use bitcoin for transaction" count="1243" />
                <Topic title="Why can't bitcoin be deflated" count="1243" />
                <Topic title="How does 'Game of thrones' Realted to bitcoin in realtime" count="1243" />
            </div>
            <div className='flex justify-center'>
                <div className=' flex justify-center bg-gray-100 rounded-xl w-[50%] mt-2'>
                    <div>
                        <a href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </a>
                    </div>
                    <div className='flex text-blue-600 text-[12px]'>
                        <a href='#'>1</a>
                        <p className='ml-2'> of</p>
                        <a href='#' className='ml-2'>16</a>
                    </div>
                    <div>
                        <a href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recenttopics