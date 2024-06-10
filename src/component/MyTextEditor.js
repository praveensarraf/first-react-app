import React, { useState } from 'react';

export default function TextEditor() {
    let [text, setText] = useState("");

    let [isItalic, setIsItalic] = useState(false);
    let [isUppercase, setIsUppercase] = useState(false);
    let [isLowercase, setIsLowercase] = useState(false);

    let toggleUpperCaseText = () => {
        if (isUppercase) {
            setText(text.toLowerCase());
        } else {
            setText(text.toUpperCase());
        }

        setIsUppercase(!isUppercase);

        if (isLowercase) setIsLowercase(false);
    }

    let toggleLowerCaseText = () => {
        if (isLowercase) {
            setText(text.toUpperCase());
        } else {
            setText(text.toLowerCase());
        }

        setIsLowercase(!isLowercase);

        if (isUppercase) setIsUppercase(false);
    }

    let toggleItalicText = () => {
        setIsItalic(!isItalic);
    }

    let changingText = (event) => {
        setText(event.target.value);
    }

    return (
        <div id='myBox'>
            <div className="container py-1">
                <h3 className='text-center fw-bold my-4 myText'>Please enter Something in the text box</h3>

                <textarea placeholder='Enter your text here!' className="form-control" rows="11" value={text} onChange={changingText} style={{ fontStyle: isItalic ? 'italic' : 'normal' }}></textarea>

                <div className="row my-3">
                    <div className="col-lg-12 d-lg-flex justify-content-around">
                        <h6 className='myText'>
                            Words Count : <span className='fw-bold h2'> {text.split(" ").filter(words => words.length > 0).length} </span>
                        </h6>

                        <h6 className='myText'>
                            Characters Count : <span className='fw-bold h2'> {text.length} </span>
                        </h6>

                        <button type="button" className="btn" onClick={toggleUpperCaseText}>
                            {isUppercase ? 'Reset Text' : 'Convert to Upper Text'}
                        </button>
                    
                        <button type="button" className="btn my-lg-0 my-2" onClick={toggleLowerCaseText}>
                            {isLowercase ? 'Reset Text' : 'Convert to Lower Text'}
                        </button>

                        <button type="button" className="btn" onClick={toggleItalicText}>
                            {isItalic ? 'Remove Italic' : 'Convert to Italic'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
