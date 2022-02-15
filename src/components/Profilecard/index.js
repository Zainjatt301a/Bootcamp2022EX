const ProfileCard = () => {
    return (
        <div className="flex flex-col m-2 container  bg-white h-64 w-[300px] rounded-xl">
            <div>
                <img src="https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" className="rounded-t-xl h-36 w-[350px]" />
            </div>
            <div className="h-64 flex items-center flex-col">
                <div className="">
                    <img src="https://im.indiatimes.in/content/2021/May/intro-1587390568_6092721e5baf5.jpg?w=725&h=408" className="border-[1px] border-gray-300 rounded-full h-20 p-1 mt-[-37px] w-20" />
                </div>
                <div>
                    <h1 className="text-blue-600 font-bold">Professor</h1>
                </div>
                <div>
                    <h1 className="text-blue-300">Istanbul, Turkey</h1>
                </div>
                <div className="  border-b-[1px]  border-gray-600   mt-4">
                    <div className="flex justify-center mt-3">
                        <p className="text-blue-300"><span className="text-blue-600">5K</span> Posts</p>
                        <p className="text-blue-300"><span className="text-blue-600 m-1">500</span>Videos
                        </p>
                        <p className="text-blue-300"><span className="text-blue-600 m-1">40</span>Books</p>
                    </div>
                    <div className="flex justify-center mt-3">
                        <p className="text-blue-300"><span className="text-blue-600">5K</span> Ideas</p>
                        <p className="text-blue-300"><span className="text-blue-600 m-1">126</span> Introductions
                        </p>
                        <p className="text-blue-300"><span className="text-blue-600 m-1">626</span> Podcasts</p>

                    </div>
                </div>

            </div>


        </div>
    )
}
export default ProfileCard