import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
//  function to change to toUpperCase
  const handleUpClick=()=>
  {
    
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Text has been converted into UpperCase","success");
  
  }

  // function to change to toLowerCase
  const handleLoClick=()=>
  { 
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Text has been converted into LowerCase","success");

  
  }

  // function to clear the screen
  const handleClear=()=>
    {
        
        let newText="";
        setText(newText);
      props.showAlert("Text has been Cleared","success");

    
    }
  // function to copy to clipboard
    const handleCopy=()=>
      {
          navigator.clipboard.writeText(text);
        props.showAlert("Text has been Copied","success");

          
      }
      
            // function to change to titlecase
            const handleTit=()=>
              {
                  let newText=text.toLowerCase().split(' ');
                  for(let i=0;i<newText.length;i++)
                  {
                    newText[i]=newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
                    
                  }
      
                
                    setText(newText.join(" "));
      props.showAlert("Text has been converted into TitleCase","success");

              
              }
              
            // function to speak
            const handleSpeak=()=>
              {
                  let msg=new SpeechSynthesisUtterance();
                  console.log(msg)
                  msg.text=text;
                  window.speechSynthesis.speak(msg);
                  props.showAlert("Text has been Speaked","success");

              
              }
        
               //function to count vowels
              const handleVoCount=()=>
                {
                   let num=text.match(/[aeiouAEIOU]/gi).length;
                    console.log(num)
                   setText("Total number of vowels="+num+"");
              props.showAlert("Vowels has been counted","success");
 
                
                }

                //function to count consonant
                const handleCoCount=()=>
                  {
                     let num=text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi).length;
                      console.log(num)
                     setText("Total number of consonants="+num+"");
              props.showAlert("Consonants has been counted","success");

                  
                  }
                 //function to remove extra spaces
                  const handleSpace=()=>
                    {
                      let newText=text.split(/[ ]+/);
                      setText(newText.join(" "));
              props.showAlert("ExtraSpaces has been Removed","success");
                      
                    
                    }

    //  function to reverse the sentence
      const handleRev=()=>
        {
          // using loop
            // let revText="";
            // for(let i=text.length-1;i>=0;i--)
            // {
            //   revText+=text[i];
            // }
            // console.log(revText);
            let revText=text.split('').reverse().join('');
            setText(revText);
            props.showAlert("Text has been reversed","success");

        }

    // function to toggle on change
  const handleOnChange=(e)=>
  {
        setText(e.target.value);
  }



const [text,setText]=useState("");

return (
  <>
  <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
    <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
<textarea placeholder="enter text here....." className="form-control" value={text} style={{background:props.mode==="dark"?"#042743":"white",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary " onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy to Clipboard</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRev}>Reverse Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTit}>TitleCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 " onClick={handleSpeak}>Speak</button>


  </div>
  <div disabled={text.length===0} className="container my-2">
  <button disabled={text.length===0}  className="btn btn-primary " onClick={handleVoCount}>VowelCount</button>
  <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCoCount}>ConsonantCount</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpace}>Remove Whitespaces</button>

  </div>
  <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
    <h2>Your Text Summmary</h2>
    <p>{text.split(" ").filter((element)=>element.length!==0).length} words and {text.length} characters</p>
    <p>{text.length>0?(0.008 * text.split(" ").length).toPrecision(2):0} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Type something to preview!!!"}</p>
  </div>
  </>
)
}

TextForm.proptype={
  heading:PropTypes.string,
}