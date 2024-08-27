// import About from './components/About';

import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const[btnText,setBtnText]=useState("Enabled Light Mode");
  
  const showAlert=(message,type)=>
  {
     setAlert(
      {
        msg:message,
        type:type
      }
     )
     setTimeout(()=>{
       setAlert(null);
      },1500)
  }

  const toggleMode=(cls)=>
  {
       if(cls==="bg-primary")
       {
        document.body.style.background="blue";
        showAlert("Blue BG has been enabled","success");

        
       }
       else if(cls==="bg-warning")
       {
        document.body.style.background="#ffbf00";
        showAlert("Yellow BG has been enabled","success");


       }
       else if(cls==="bg-success")
        {
         document.body.style.background="green";
        showAlert("Green BG has been enabled","success");

 
        }
        else if(cls==="bg-danger")
          {
           document.body.style.background="red";
          showAlert("Red BG has been enabled","success");
          
          }
        else if(mode==='light')
          {
            setMode("dark");
            document.body.style.background="#042743";
            setBtnText("Enabled Dark Mode");
            showAlert("DarkMode has been enabled","success");
            document.title='TextUtils - DarkMode';
            

          }
          else if(mode==="dark")
          {
            setMode("light");
            document.body.style.background="white";
            setBtnText("Enabled Light Mode");
            showAlert("LightMode has been enabled","success");
            document.title='TextUtils - LightMode';
          
      
          }
  }
  return (
    <>
  {/* <Router>  */}
<Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
<Alert alert={alert}/>
<div className="container mb-3">
{/* <Switch>
          <Route exact path="/about">
              <About heading="About Us"/>
            
          </Route>
        
          <Route exact path="/">
          
          </Route>
          </Switch> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
</div>
{/* </Router> */}
    </>
  );
}

export default App;
