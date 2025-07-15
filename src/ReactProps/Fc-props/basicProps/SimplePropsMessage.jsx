function SimplePropsMessage(props){

    const {name, age, location} =props;

    return(
        <div>
            <h1>Grand Child</h1>
            
            <p>Name:{name}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default SimplePropsMessage;