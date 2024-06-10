import React, { useState } from 'react'
import Webcam from 'react-webcam'

export default function TextEditor() {

    let [text, setText] = useState("");
    let [italicTxt, setItalic] = useState(false);

    let upperCaseText = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    let lowerCaseText = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    let italicText = () => {
        setItalic(!italicTxt);
    }

    let clearText = () => {
        setText("");
    };
 
    let changingText = (event) => {
        setText(event.target.value);
    }

    let [myWebcam, setMyWebcam] = useState();

    let toggleWebcam = () => {
        setMyWebcam(myCamera => !myCamera);
    };

    
  return (
    <div id='myBox'>
        <div className="container py-4">

            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <h3 className='text-center fw-bold my-4 myText'><i class="fa-solid fa-pen-nib"></i> : Please enter your text in the text box</h3>
                    </div>
                    
                    <div className='row my-3'>
                        <textarea placeholder='Enter your text here!' className="form-control" rows="11" value={text} onChange={changingText} style={{ fontStyle: italicTxt ? 'italic' : 'normal' }}></textarea>
                    </div>

                    <div className="row">
                        <div className="col-md-12 d-md-flex justify-content-around">
                            <h6 className='myText'>
                                Words Count : <span className='fw-bold h2'> {text.split(" ").filter(words => words !== "").length} </span>
                            </h6>

                            <h6 className='myText'>
                                Characters Count : <span className='fw-bold h2'> {text.length} </span>
                            </h6>
                        </div>
                    </div>

                </div>
                
                <div className='col-3 p-5 pb-0'>
                    <div className="row">
                        <div className='col-12 d-flex flex-column' id='myEditorBtn'>
                            <button type="button" className="btn" onClick={upperCaseText}>Convert to Upper Case  <i class="fa-solid fa-rotate"></i></button>
                        
                            <button type="button" className="btn" onClick={lowerCaseText}>Convert to Lower Case  <i class="fa-solid fa-rotate"></i></button>

                            <button type="button" className="btn" onClick={italicText}>Convert to Italic Text  ( <i class="fa-solid fa-italic"></i> )</button>

                            <button type="button" className="btn" onClick={clearText}>Clear Text  <i class="fa-regular fa-circle-check"></i></button>

                            <button type="button" className="btn" onClick={toggleWebcam}>{myWebcam ? "Close Webcam" : "Open Webcam"}  <i class="fa-solid fa-camera"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            {myWebcam && <Webcam width={1250} height={400}></Webcam>}

        </div>
    </div>
  )
}
