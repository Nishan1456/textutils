// import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function About(props) {
let myStyle={
  color: props.mode==="dark"?"white":"#042743",
  background:props.mode==="dark"?"rgba(36,74,104)":"white",
}

  return (
    <div className='container my-3 rounded-3' >
        <h2 className='my-3' style={{color: props.mode==="dark"?"white":"#042743"}}>{props.heading}</h2>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
          Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time of count.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
       </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
           Textutils is a free character counter tool that provides instant character count and word count statistics for a given
           text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
               This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera. It 
               suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

About.prototype={
    heading:PropTypes.string
}