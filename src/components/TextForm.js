import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('Enter text here');
    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>    
        </div>
        <button className="btn btn-primary mx-1" type="submit" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" type="submit" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" type="submit" onClick={() => setText('')}>Clear Text</button>
        <button className="btn btn-primary mx-1" type="submit" onClick={handleOnCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" type="submit" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
