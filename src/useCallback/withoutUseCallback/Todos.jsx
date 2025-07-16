export default function Todos({todos, handleAddTodos}) {
    return <>
        <div className="container">
            <h1>Todos App</h1>
            <ul>
                {
                    todos && todos.map((todo,index) => {
                        return <li key={index}>
                            {todo}
                        </li>
                    })
                }
            </ul>
            <button onClick={handleAddTodos}>Add Todo</button>
        </div>
        
    </>
}