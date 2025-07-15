import { useState } from "react"

export  function Button({
       add,div,mul,sub,reset,selectedId,handleBulkDelete,buttonType
}){

    const [userInput,setUserInput] = useState(5)
    

    return <div>
          {buttonType && buttonType != 'BulkDelete' && (
              <div>
                 <button onClick = {()=>add(userInput)}> ADD </button>
                 <button onClick = {()=>sub(userInput)}> SUB </button>
                 <button onClick = {()=>mul(userInput)}> MUL </button>
                 <button onClick = {()=>div(userInput)}> DIV </button>
                 <button onClick = {()=>reset(0)}> RESET </button>
              </div>
              
          )}
           

           <div className="bulk-delete">
                    {selectedId && selectedId.length !=0 && (
                        <div>   
                             <button onClick={handleBulkDelete}>Bulk Delete</button>
                        </div>
                        
                    )}
           </div>

          
    </div>
}