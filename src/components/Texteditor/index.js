import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import './main.css'

const Texteditor = () => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e)
    }

    return (
        <div className=' '>
            <ReactQuill

                value={text}
                onChange={handleChange}
                modules={{
                    toolbar: [
                        ['bold', 'italic', 'link'],
                    ],
                }}

            />
        </div>
    )
}





export default Texteditor