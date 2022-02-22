// import './main.css'
import ReactQuill from 'react-quill';
import React, { useState } from 'react';
import './main.css'
import 'react-quill/dist/quill.snow.css';
import banner3 from '../../assets/banner3.jpg'
import { post } from '../../config/firebase';

const CustomToolbar = () => (
    <div id="toolbar" className='bg-blue-600 rounded-t-2xl h-[15%]'>

        <button className="ql-bold ql-stroke " />
        <button className="ql-italic" />
        <button className="ql-link" />


    </div>
);



const Texteditor = () => {


    const [description, setDescription] = useState("")
    // console.log(description, "Bodyy");

    // const newPost = () => {
    //     post(description)
    //     description("")

    // }
    return (
        <div className="text-editor w-[90%] ml-5">
            <CustomToolbar />
            <ReactQuill
                value={description}
                onChange={(e) => setDescription()}
                placeholder={"Write Something"}
                modules={Texteditor.modules}
                formats={Texteditor.formats}
                theme={"snow"} // pass false to use minimal theme
                className=" w-full"


            />
            {/* <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border-2 border-gray-300 outline-none" /> */}
            <div className='flex items-center justify-between w-full mt-2'>
                <div className='flex flex-col'>
                    <div>
                        <h2>Stored on chain?</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div>
                                <input type={'checkbox'} checked />
                            </div>
                            <div className='ml-1'>
                                Sure
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <input type={'checkbox'} />
                            </div>
                            <div className='ml-1'>
                                Nope
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[60%]'>
                    <button className="flex justify-center w-[100%] h-10 items-center bg-blue-600 rounded-2xl">

                        <h3 className='text-white' >Post</h3>

                    </button>
                </div>
            </div>
            <div className='mt-2 w-[100%]'>
                <img src={banner3} className=" rounded-2xl h-[100%]" />
            </div>
        </div>
    );
}


Texteditor.modules = {
    toolbar: {
        container: "#toolbar",

    },
    clipboard: {
        matchVisual: false,
    }
};


Texteditor.formats = [
    "bold",
    "italic",
    "link",

];





export default Texteditor