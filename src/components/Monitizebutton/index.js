const Monitizebutton = () => {
    return (
        <div className="bg-blue-600 flex justify-center items-center rounded-2xl w-[400px] h-[60px]">
            <button className="flex pl-7 h-[30px] justify-center items-center bg-white rounded-2xl">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                </div>
                <div className="ml-2 pr-7 text-blue-600">
                    <h3>Monitize a Topic</h3>
                </div>
            </button>

        </div>
    )


}

export default Monitizebutton