 import { useState } from 'react'
import './App.css'
 
 function Lists() {

  const [changeColor, setChangeColor] = useState(-1)

  const items =['Navrongo','Manyoro', 'Nandom','Guo','Teshie']
   return (

     <div>
      <ul>
        {items.map((item, index) => <li className={changeColor === index ? 'lists active' : 'lists'} onClick={() => setChangeColor(index)
        }>{item}</li>)}
      </ul>
     </div>
   )
 }
 
 export default Lists