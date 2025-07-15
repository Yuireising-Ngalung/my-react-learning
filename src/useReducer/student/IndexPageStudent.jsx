import { useReducer } from "react"
import { studentHandleAction, studentData } from "./student.action"
import { type } from "@testing-library/user-event/dist/type";

export default function IndexPageStudent(){

    const [students, dispatch] = useReducer(studentHandleAction,studentData);

    return(<>
        <div className="container shadow p-md-5 py-4  border-top border-5 border-primary rounded-top">
            <h1>useReducer | <span className="text-primary">Student Data</span> </h1>
            <hr />
            <button className="btn btn-success" onClick={()=> dispatch({type:'add'})}>Add New Student</button>
            
            <div className="overflow-x-auto">
                <table className="table table-hover my-2">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (students && students.length !== 0)
                            ?
                                students.map((student, index) => {
                                    const {student_id, student_name, student_age} = student;
                                    return(
                                        <tr key={index}>
                                            <td>{student_id}</td>
                                            <td>{student_name}</td>
                                            <td>{student_age}</td>
                                            <td className="d-flex gap-2">
                                                <button className="btn btn-warning" onClick={() => dispatch({type:'update', id:index})}>Update</button>
                                                <button className="btn btn-danger" onClick={() => dispatch({type:'delete',id:index})}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                                <tr>
                                    <td colSpan={10}>
                                        <h1 className="text-center">Student Record not found</h1>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}