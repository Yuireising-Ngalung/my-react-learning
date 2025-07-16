export default function TodosUI({todos,input,handleInput,handleSubmit,handleDelete}){
    return(<>
        <div className="container p-2 p-md-5 shadow border-top border-5 border-danger rounded">
            <h1 className="text-center text-primary">Todo App</h1>
            <hr />

            <div className="d-flex">
                <form className="d-flex gap-2 w-100" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="todo"
                        placeholder="enter your todos list"
                        value={input}
                        onChange={handleInput}
                        required
                    />
                    <button className="btn btn-success" >ADD</button>
                </form>
            </div>
            
            <div className="mt-4">
                {
                todos && todos.map((todo, index) => {
                    return(
                        <div key={index} className="d-flex mt-2 justify-content-between bg-light p-2">
                            <p className="fw-bold">{todo}</p>
                            <button className="btn btn-danger" onClick={() => handleDelete(index)}>乂</button>
                        </div>
                    )
                })
            }
                
            </div>
            
        </div>
    </>)
}