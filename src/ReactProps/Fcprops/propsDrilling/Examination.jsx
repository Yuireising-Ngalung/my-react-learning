import { Fragment } from "react/jsx-runtime";
import Result from "./Result";

function Examination({studentDetails, learningStatus}){


    //Destructuring student details
    const {student_name, student_age, student_contact, student_course, student_qualification, student_location} = studentDetails;

    return(
        <>
            <h1><i>Examination Page</i></h1>
            {
                (learningStatus)?
                <Fragment>
                    <h1>ACTIVE</h1>
                    <ul>
                        <li><strong>Name: </strong>{student_name}</li>
                        <li><strong>Age: </strong>{student_age}</li>
                        <li><strong>Contact: </strong>{student_contact}</li>
                        <li><strong>Course: </strong>{student_course}</li>
                        <li><strong>Qualification: </strong>{student_qualification}</li>
                        <li><strong>Location: </strong>{student_location}</li>
                    </ul>
                </Fragment>
                

                :
                <h1>Not Active</h1>
            }
            
            {/* Importing Result page */}
            <Result 
                
            />
        </>
    )
}

export default Examination;