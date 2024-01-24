import React,{useState} from "react";

export default function Textform(props) {
    const handleUpClick =()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        
    }
    const handlelowClick =()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        
    }
    const handOnChange =(event )=>{
        console.log("on change")
        setText(event.target.value)
        
    }
    const [text,setText]=useState('')
    //text="new text"//wrong way to change the state
    //setText("new texte");//correct way to change the state
    return (
   <>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} >
      <h1>{props.headings}</h1>
      <form>
        <div className="form-group">
          <textarea className="form-control" value={text}  id="mybox" rows="8" onChange={handOnChange}   style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}/>
        </div>
      </form>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase     
      </button>
      <button className="btn btn-primary" onClick={handlelowClick}>
        Convert to Lowercase     
      </button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length } Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter someting to preview it here "}</p>
    </div>

    </>
  );
}
