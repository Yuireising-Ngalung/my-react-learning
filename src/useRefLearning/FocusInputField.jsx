import { useEffect, useRef } from "react";

export default function FocusInputField(){
    const inputRef = useRef(null);
    const inputAutoFocus = useRef(null);

    useEffect(()=> {
        inputAutoFocus.current.focus();
    }, [])

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return(<>
        <div className="container p-5 bg-light border-top border-5 rounded-top border-warning">
            <h1>useRef | <span className="text-warning">Auto Focus & Focus onClick</span></h1>
            <hr />
            <div>
                <input ref={inputRef} type="text"/> &nbsp;
                <button onClick={handleFocus} className="btn btn-secondary">Focus</button>
            </div>
            
            <div>
                <input ref={inputAutoFocus} type="text" placeholder="auto focus on render" />
            </div>
        </div>
        
        
    </>)
}