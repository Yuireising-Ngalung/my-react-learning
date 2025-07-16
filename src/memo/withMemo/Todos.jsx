import { memo, useState } from "react"

function Todos({todos}) {
    const [count, setCount] = useState(0)

    console.log("Todo app rendering...")

    return <>
        <div className="container shadow p-md-5 p-5 mb-5 border-top border-5 border-info rounded">
            <h1>memo | <span className="text-info">Todos App</span></h1>
            <hr />
            <ul>
                {
                    todos && todos.map((todo,index) => {
                        return <li key={index}>
                            {todo}
                        </li>
                    })
                }
            </ul>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    </>
}

export default memo(Todos)