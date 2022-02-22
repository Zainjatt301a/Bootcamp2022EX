import logo from '../../logo.svg'
const ProfileCard = () => {
    return (
        <>
            <div className="flex flex-col w-full  items-center h-auto bg-blue-600 " >
                <div className="mt-6 mb-3.5">
                    <img className="h-28 w-28 " src={logo} alt="" />
                </div>
                <h1 className="text-white text-2xl font-medium">my2cents</h1>
                <div className="w-[85%] mt-6">
                    <div className="h-28 rounded-tl-2xl rounded-tr-2xl w-full bg-cover bg-no-repeat bg-coverphoto">
                        <img src="https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" className="rounded-t-xl h-28 w-[100%]" />
                    </div>
                    <div className="flex flex-col h-24 w-full  border-b-2  items-center bg-white">
                        <div className="relative  top-[-28px]">
                            <img className="border-[1px] border-gray-300 rounded-full h-14 p-1 w-14" src="https://im.indiatimes.in/content/2021/May/intro-1587390568_6092721e5baf5.jpg?w=725&h=408" alt="" />
                        </div>
                        <h1 className="text-blue-600 text-lg mt-[-26px] font-bold">Professor</h1>
                        <h2 className="text-blue-400 mb-4">Istanbul, Turkey</h2>
                    </div>
                </div>
            </div>
            {/* first secction done */}

        </>
    )
}
export default ProfileCard