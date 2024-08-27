import React from 'react'

function Alert(props) {
  const capitalize=(word)=>
  {
    let newText=word.toLowerCase();
    return newText.charAt(0).toUpperCase()+newText.slice(1);
  }
  //props.alert && ignores the alert value which is null
  return (
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
    </div>
  )
}

export default Alert
