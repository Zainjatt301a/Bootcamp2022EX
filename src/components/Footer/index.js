import logo from '../../logo.svg'
const Footer = () => {
    const Pages = [{
        name: "Advertisement"
    },
    { name: "Your Money" },
    { name: "Bonuses" },
    { name: "FAQ" },
    { name: "Privacy Policy" },
    { name: "Imprint" },
    { name: "Terms And Conditions" },
    ]
    return (
        <div className="bg-blue-700 h-12 mt-60  flex justify-between items-center ">
            <div className='ml-10'>
                <img src={logo} className="sm:w-20 w-12" />
            </div>
            <div className='flex sm:text-[14px] text-[10px]'>
                {Pages.map((item) => {
                    return <ul className='flex'><li className='mr-3 text-white'>{item.name} </li></ul>
                })}
            </div>
            <div></div>
        </div>
    )
}

export default Footer