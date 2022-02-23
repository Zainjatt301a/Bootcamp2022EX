const ActivityComponents = (props) => {
    return (
        <div>
            <button class="md:w-60 w-32 h-12 bg-slate-200 text-black rounded-2xl hover:text-white hover:bg-blue-700 shadow-xl">
                <div className="justify-start ml-2 items-center flex">
                    <div>
                        {props.icon}
                    </div>
                    <div><h3 className="ml-1 text-[14px] md:text-[16px]">{props.title}</h3></div>
                </div>
            </button>

        </div>
    )
}

export default ActivityComponents