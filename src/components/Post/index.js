const Post = () => {
    const current = new Date();
    const date = `${current.toLocaleDateString()} ${current.toLocaleTimeString()}`;
    return (
        <>
            <div className="flex flex-col w-[460px] m-5 border-gray-300">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <div className="flex" >
                            <img src="https://im.indiatimes.in/content/2021/May/intro-1587390568_6092721e5baf5.jpg?w=725&h=408" className=" rounded-full h-[25px]  w-[25px] ml-[4px]" />
                            <h1 className="ml-2 text-blue-700 font-[600]">Craige Cooper</h1>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-1">
                            <p className="text-[12px] text-blue-500 font-[500]">{date}</p>
                        </div>
                    </div>
                    <div className="text-[12px] font-[500] text-blue-500 ml-8 mt-[3px]">
                        <p>#The NFTs for a poem, an article, a short film, and a novel</p>
                    </div>
                </div>
                <div className="ml-8 mt-4 text-[14px]">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat eget sem interdum varius. Nam tempor, tortor venenatis accumsan pharetra, turpis justo fringilla orci, nec ullamcorper dui odio in diam. Nullam tristique dolor nisl, id finibus nisl eleifend non.<a href="https://tailwindcss.com/docs/font-size" className="text-blue-600"> Praesent dictum luctus ante</a>, id euismod libero dignissim in. Nullam faucibus sagittis sapien ac laoreet. Nam feugiat bibendum nisi. Nunc turpis nunc, egestas eu mollis nec, tincidunt eget lorem. Integer laoreet non tellus et viverra. Sed facilisis neque nec lorem laoreet condimentum. Morbi convallis interdum ultrices. Aenean luctus a lectus in lobortis. Nunc aliquet ornare dolor a semper.

                    </p>
                </div>
                <div className="flex justify-between items-center ml-8 mt-5">
                    <div className="flex">
                        <div className="flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="ml-1 text-blue-500">12.5k</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-1 text-blue-500">12.5k</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-1 text-blue-500">12.5k</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span className="ml-1 text-blue-500">12.5k</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                        <div className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
            <div className="w-[490px] mt-5 mr-10 border-t-[1px] border-blue-400"></div>
        </>
    )
}

export default Post