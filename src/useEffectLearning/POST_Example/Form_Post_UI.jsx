export default function Form_Post_UI({handleSubmit, handleOnChange, buttonDisabled}){
    return(<div>
        <h1>ReqRes API: Create user</h1>
        <div className="post_API_form_wrapper">
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="enter your name" 
                        onChange={handleOnChange}
                    />
                </div>

                <div className="row">
                    <label htmlFor="job">Job</label>
                    <input 
                        type="text" 
                        name="job" 
                        id="job" 
                        placeholder="enter the job title"
                        onChange={handleOnChange}
                    />
                </div>

                <div className="post_API_form_button">
                    <button type="submit" disabled={buttonDisabled}>Create User</button>
                </div>
            </form>
        </div>
    </div>)
}