export default function Form_Registration_UI({buttonDisabled, handleOnchange, handleSubmit}){
    return(<div>
        <div className="form-wrapper">
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="profileName">NAME</label>
                    <input 
                        type="text" 
                        name="profileName" 
                        id="profileName" 
                        placeholder="enter your name" 
                        onChange={handleOnchange}
                    />
                </div>

                <div className="row">
                    <label htmlFor="profileJob">JOB</label>
                    <input 
                        type="text" 
                        name="profileJob" 
                        id="profileJob" 
                        placeholder="enter your job" 
                        onChange={handleOnchange}
                    />
                </div>

                <div className="form-submit">
                    <button type="submit" disabled = {buttonDisabled}>Sumbit</button>
                </div>
            </form>
            
        </div>
    </div>)
}