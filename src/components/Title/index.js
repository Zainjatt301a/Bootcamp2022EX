const Title = (props) => {
    return (
        <div className="ml-5 flex items-center w-[460px] h-[40px] rounded bg-gray-100 ">
            <h1 className="text-blue-600 text-[18px] font-[600] ml-5">{props.name}</h1>
        </div>
    )
}

export default Title