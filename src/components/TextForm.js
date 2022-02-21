import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('upper case clicked'+text)
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("converted to upper case",'success')
    }
    const handleLowClick=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("converted to lower case",'success')
    }
    const handlecleartext=()=>{
        let newtext=''
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        console.log('onchange')
        setText(event.target.value)
    }
    const[text,setText]=useState('')
    // text="new text"
    // setText("new text")
    return (
        <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#3c0404'}}>
          <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#3c0404'}}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
<button type="button" className="btn btn-dark "  onClick={handleLowClick}>convert to lowercase</button>
<button type="button" class="btn btn-info" onClick={handlecleartext}>clear</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#3c0404'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} letters {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter something to preview"}</p>

      </div>
      
      </>
    
  )
}
