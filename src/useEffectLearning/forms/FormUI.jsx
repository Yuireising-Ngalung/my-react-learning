    export default function FormUI(props){

        const {
            handlePreventDefault, 
            handleInputOnchange,
            submitButtonDisabled
        } = props;


        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={handlePreventDefault}>
                    <div className="row">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"     
                            name="username" 
                            placeholder="username" 
                            onChange={handleInputOnchange} 
                        />
                    </div>

                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text" 
                            name="password" 
                            placeholder="password" 
                            onChange={handleInputOnchange}
                        />
                    </div>

                    <input type="submit" disabled = {submitButtonDisabled}/>
                </form>
            </div>
        )
    }


    