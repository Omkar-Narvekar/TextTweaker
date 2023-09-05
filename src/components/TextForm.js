import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupClick = ()=>{
        if (text.trim() !== ""){
        let upper = text.toUpperCase();
        setText(upper)
        props.showAlert("converted to uppercase", "success");
    }
}

    const handlelowClick = ()=>{
        if (text.trim() !== ""){
        let lower = text.toLowerCase();
        setText(lower)
        props.showAlert("converted to lowercase", "success");
    }
}

    const handlecapitalFirst = ()=>{
        let capFirst = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(capFirst)
    }

    const handleallcapitalFirst = () => {
        let lines = text.split(/\r?\n/); // Split text into lines
        let capitalizedLines = lines.map(line => {
          let words = line.split(" "); // Split each line into words
          let capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          });
          return capitalizedWords.join(" ");
        });
        const upper = capitalizedLines.join("\n"); // Join lines back with new lines
        setText(upper);
      };

    const handleReverse = ()=>{
        let textReverse = text.split("").reverse();
        let ans = textReverse.join("")
        setText(ans)
    }
    
    const handleCopy = () => {
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpaces = ()=>{
        let newText = text.trim().split(/\s+/);  // Use \s+ pattern
        setText(newText.join(" "));
    }
    
    const handleClear = ()=>{
        let clear = "";
        setText(clear)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const getwordcount = () => {
        if (text.trim === ""){
            return 0;
        }
        
        return text.split(/\s+/).filter(word => word !== "").length;
    };

    const [text, setText] = useState('')
    return (
        <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleupClick}>Set UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handlelowClick}>Set LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handlecapitalFirst}>Capital First Letter</button>
        <button className='btn btn-primary mx-2' onClick={handleallcapitalFirst}>Capital All First Letter</button>
        <button className='btn btn-primary mx-2' onClick={handleReverse}>Reverse</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-2' onClick={removeExtraSpaces}>Remove Space</button>
        <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{getwordcount()} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(word => word !== "").length} minutes to read</p>
        <p>{text.split(/\r?\n|\r/).filter(line => line.trim() !== "").length} lines</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
