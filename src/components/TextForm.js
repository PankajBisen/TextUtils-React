import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log('UpperCase Was clicked: ' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase!', 'success');
    }
    const handleLoClick = () => {
        //console.log('UpperCase Was clicked: ' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lovercase!', 'success')
    }
    const handleClearClick = (event) => {
        //console.log('UpperCase Was clicked: ' + text)
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared!', 'success');
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to Clipbord!', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed!', 'success');
    }

    const handleOnChange = (event) => {
        //console.log('On change ')
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'042743'}} id="myBox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LoverCase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces </button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(' ').length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>
            </div>
        </>
    )
}
