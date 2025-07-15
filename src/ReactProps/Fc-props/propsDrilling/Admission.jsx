import { useState } from "react";
import Course from "./Course";

function Admission(){

    const [studentDetails, setStudentDetails] = useState({
        student_name:'Yuireising',
        student_age:26,
        student_contact:1234567890,
        student_course:'Full Stack Java',
        student_qualification:'BCA',
        student_location:'Manipur'
    })
    return(
        <div>
            <h1>Admission Page</h1>

            {/* Importing Course page */}
            <Course 
                studentDetails = {studentDetails}
            />
        </div>
    )
}

export default Admission;