const Topic = (props) => {
    return (
        <div className="flex flex-col mt-5 ">
            <div className="flex justify-between items-center pl-6 pr-6">
                <div className="w-[100%]">
                    <h3>{props.title}</h3>
                </div>
                <div className="bg-white text-blue-400 text-[13px] rounded flex justify-center items-center w-[40px] h-7">
                    <h4>{props.count}</h4>
                </div>
            </div>
        </div>
    )
}

export default Topic