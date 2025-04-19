
import style from "./App.module.css"
import ButtonConainer from "./component/ButtonContainer"
import Display from "./component/Display"
import { useState } from "react"

function App() {
  

  let [calValue, setCalValue] = useState("");
  const onButtonClick = (buttontext) => {

       if( buttontext === "c") {
         setCalValue("");
         }
        else if(buttontext === "=") {
          setCalValue(eval(calValue));
         }
        else{
         const newcalval=calValue + buttontext;
         setCalValue(newcalval);
          }
        }

  return (
    <div className={style.calculator}>
      <Display displayValue={calValue}></Display>
      <ButtonConainer onButtonClick={onButtonClick}/>
      </div>
  )
}

export default App
