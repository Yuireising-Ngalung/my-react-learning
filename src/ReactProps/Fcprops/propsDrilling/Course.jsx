import { useState } from "react";
import Examination from "./Examination";

function Course({studentDetails}){

    const [student, setStudent] = useState(studentDetails);
    const [learningStatus, setLearningStatus] = useState(false);

    //Destructuring student details
    const {student_name, student_age, student_contact, student_course, student_qualification, student_location} = student;

    //Change Course Handler
    const handleCourse = () =>{
        setStudent({...student, student_course:'Full Stact ANGULAR'})
    }

    return(
        <div>
            <h1><i>Course Page <mark>{student_name}</mark></i></h1>
            <ul>
                <li><strong>Name: </strong>{student_name}</li>
                <li><strong>Age: </strong>{student_age}</li>
                <li><strong>Contact: </strong>{student_contact}</li>
                <li><strong>Course: </strong>{student_course} <button onClick = {handleCourse}>Change Course</button></li>
                <li><strong>Qualification: </strong>{student_qualification}</li>
                <li><strong>Location: </strong>{student_location}</li>
            </ul>

            {/* importing Examination Page*/}

            <Examination 
                studentDetails = {student}
                learningStatus = {learningStatus}
            />
            
        </div>
    )
}

export default Course;