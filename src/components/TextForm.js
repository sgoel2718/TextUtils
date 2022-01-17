import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>
    {
        console.log('Uppercase was clicked');
        let newText1 = text.toUpperCase();
        setText(newText1);
        props.showAlert("converted to uppercase","success");
    }

    const handleLowClick =()=>
    {
        console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear =()=>
    {
        console.log('Uppercase was clicked');
        let newText = '';
        setText(newText);
    }

    const handremovespace =()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy=()=>
    {
        // var text=document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges(); // to deselect the text
    }

    const handleOnChange =(event)=>
    {
        setText(event.target.value)
    }
    const [text,setText] = useState('')
    return (
        <>
        <div className='container' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label" >{props.title}</label>
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white', 
            color: props.mode==='dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handremovespace}>Remove Space</button>
        </div>
        <br></br>
        <div className="container" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
            <h3>Your Text summary</h3>
            <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
            <p>It will take around {0.008*text.split(" ").filter((element)=> {return element.length!==0}).length} min to read the above text</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in textbox abve to preview"}</p>
        </div>
        </>
    )
}
