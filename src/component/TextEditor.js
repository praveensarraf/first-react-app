import React, { useState } from "react";
import Webcam from "react-webcam";

export default function TextEditor() {
    let [text, setText] = useState("");
    let [italicTxt, setItalic] = useState(false);

    let upperCaseText = () => {
        let newText = text.toUpperCase();
        setText(newText);

        console.log("Text converted to Upper Case!");
    };

    let lowerCaseText = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);

        console.log("Text converted to Lower Case!");
    };

    let italicText = () => {
        setItalic(!italicTxt);
        // eslint-disable-next-line 
        {!italicTxt ? console.log("Converted to Italic Text!") : console.log("Converted to Normal Text!")}
    };

    let clearText = () => {
        setText("");
        console.log('Text cleared!!')
    };

    let changingText = (event) => {
        setText(event.target.value);
    };

    let [myWebcam, setMyWebcam] = useState();

    let toggleWebcam = () => {
        setMyWebcam((myCamera) => !myCamera);
    };

    return (
        <div id="myBox">
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <div className="row">
                            <h3 className="text-center fw-bold my-4 myText">
                                <i className="fa-solid fa-pen-nib"></i> : Please
                                enter your text in the text box
                            </h3>
                        </div>

                        <div className="row my-3">
                            <textarea
                                placeholder="Enter your text here!"
                                className="form-control"
                                rows="11"
                                value={text}
                                onChange={changingText}
                                style={{
                                    fontStyle: italicTxt ? "italic" : "normal",
                                }}
                            ></textarea>
                        </div>

                        <div className="row countBox">
                            <div className="col-md-12 d-md-flex justify-content-around">
                                <h6 className="myText">
                                    Words Count :{" "}
                                    <span className="fw-bold h2">
                                        {" "}
                                        {
                                            text
                                                .split(" ")
                                                .filter((words) => words !== "")
                                                .length
                                        }{" "}
                                    </span>
                                </h6>

                                <h6 className="myText">
                                    Characters Count :{" "}
                                    <span className="fw-bold h2">
                                        {" "}
                                        {text.length}{" "}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 p-lg-5 pb-0">
                        <div className="row">
                            <div
                                className="col-lg-12 d-md-flex flex-lg-column"
                                id="myEditorBtn"
                            >
                                <button
                                    type="button"
                                    className="btn mx-lg-0 mx-md-2"
                                    onClick={upperCaseText}
                                >
                                    Convert to Upper Case{" "}
                                    <i className="fa-solid fa-rotate"></i>
                                </button>

                                <button
                                    type="button"
                                    className="btn mx-lg-0 mx-sm-2"
                                    onClick={lowerCaseText}
                                >
                                    Convert to Lower Case{" "}
                                    <i className="fa-solid fa-rotate"></i>
                                </button>

                                <button
                                    type="button"
                                    className="btn mx-lg-0 mx-sm-2"
                                    onClick={italicText}
                                >
                                    Convert to Italic Text (
                                    <i className="fa-solid fa-italic"></i> )
                                </button>

                                <button
                                    type="button"
                                    className="btn mx-lg-0 mx-sm-2"
                                    onClick={clearText}
                                >
                                    Clear Text{" "}
                                    <i className="fa-regular fa-circle-check"></i>
                                </button>

                                <button
                                    type="button"
                                    className="btn mx-lg-0 mx-sm-2"
                                    onClick={toggleWebcam}
                                >
                                    {myWebcam ? "Close Webcam" : "Open Webcam"}{" "}
                                    <i className="fa-solid fa-camera"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {myWebcam && <Webcam width={1250} height={400}></Webcam>}
            </div>
        </div>
    );
}
