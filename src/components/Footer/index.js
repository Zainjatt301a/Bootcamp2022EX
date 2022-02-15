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
        <div className="bg-blue-700 h-[50px]  flex justify-between items-center ">
            <div className='ml-10'>
                <img src={logo} width={60} />
            </div>
            <div className='flex'>
                {Pages.map((item) => {
                    return <ul className='flex'><li className='mr-3 text-white'>{item.name} </li></ul>
                })}
            </div>
            <div></div>
        </div>
    )
}

export default Footer