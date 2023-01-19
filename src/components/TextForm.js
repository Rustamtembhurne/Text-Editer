import React, { useState } from 'react'
import './Form.css';

export default function TextForm(props) {

  const [text, setText] = useState('');
  // setText("new text");



  // upper case button...
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) => {      // iski help se print kr pa raha hai
    setText(event.target.value);
  }



  // lower case button...
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }


  // clear text button...
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  }


  // copy text button...
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select('');
    navigator.clipboard.writeText(text.value);
  }


  // remove extra spaces button...
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }



  // convert first letter of each word capital...
  const handleTitleclick = () => {
    let newText = text.split(' ')
      .map(function (word, index) {
        return word.charAt(0)
          .toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    setText(newText);
  };




  // every after dot first latter is capital...
  // const handleDotFirstChar = () => {
  // }



  // dounload paragraph...
  // const handleDounloadText = (text) => {
  //   let newText = document.createElement('a');
  //   newText.setAttribute(encodeURIComponent(text));
  //   newText.setAttribute('download');
  //   newText.style.display = document.body.appendChild(newText);
  //   newText.click(); document.body.removeChild(newText);
  // }


  return (
    <>
       

        <div>
           <div className='top-heading' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

            <h1 className='mx-1'>{props.heading}</h1>
            <p className='mx-2'>Simply enter your text and choose the case you want to convert it to</p>
          </div>

          <div className="mb-3 my-2">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#53888d' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="9" placeholder='Enter Your text...'></textarea>
          </div>

          <button className="btn btn-primary mx-2 my-1" onClick={handleUpperCase}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my1" onClick={handleLowerCase}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spsce</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleTitleclick}>Convert Every First Letter Capital</button>


        </div>




        <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

          <h4>Your text summary</h4>
          <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>

          <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>

          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter somthing in the textbox above to preview it hear..."}</p>

        </div>

     </>

  );
};
