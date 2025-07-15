import { useRef } from "react"

export default function ChangeColor(){

    const changeColorRef = useRef(null);

    const handleBlueButton = () => {
        changeColorRef.current.style.backgroundColor = 'blue';
        changeColorRef.current.style.color = 'white'
    }

    const handleGreenButton = () => {
        changeColorRef.current.style.backgroundColor = 'green';
        changeColorRef.current.style.color = 'white'
    }

    const handleOrangeButton = () => {
        changeColorRef.current.style.backgroundColor = 'orange';
        changeColorRef.current.style.color = 'black'
    }

    const handleResetButton = () => {
        changeColorRef.current.style.backgroundColor = '';
        changeColorRef.current.style.color = '';
    }

    return(<>
        <div className="container bg-light my-5 p-md-5 py-4  border-top border-5 border-primary rounded-top">
            <h1>useRef | <span className="text-primary">Change Color</span></h1>
            <hr />
            <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button 
                    className="btn btn-primary"
                    onClick={handleBlueButton} 
                >
                    Blue
                </button>
                <button 
                    className="btn btn-success"
                    onClick={handleGreenButton}
                >
                    Green
                </button>
                <button 
                    className="btn btn-warning"
                    onClick={handleOrangeButton}
                >
                    Orange
                </button>

                <button 
                    className="btn btn-info"
                    onClick={handleResetButton}
                >
                    Reset
                </button>
            </div>
            <div className="my-2 p-2" ref={changeColorRef}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error blanditiis suscipit reprehenderit cupiditate, quas voluptates nesciunt? Quam minus voluptatibus nam laborum, odit, repellendus voluptatum sed ex deserunt cum accusamus modi itaque reprehenderit odio assumenda, rerum rem eos dolor similique dolorem quos placeat? Provident repudiandae fugit possimus maiores necessitatibus quae numquam saepe dolor dolorem accusantium? Voluptatum iusto itaque enim molestias minima! Quaerat, ipsam totam recusandae corrupti necessitatibus tempora, deserunt ratione maxime esse distinctio quae quibusdam! Dolorum, asperiores provident? Fugiat ratione eligendi eaque magnam laboriosam harum dolores reiciendis quam amet magni veritatis ex voluptatem similique, enim, consequuntur esse quia molestias? Error.</p>
            </div>
            
        </div>
    </>)
}