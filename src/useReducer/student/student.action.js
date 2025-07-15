export const studentData = [
    {
        student_id: 1,
        student_name: 'Yuireising',
        student_age: '25'
    },

    {
        student_id: 2,
        student_name: 'Karuppasamy',
        student_age: '23'
    },

    {
        student_id: 3,
        student_name: 'Krishna Babu',
        student_age: '22'
    },

    {
        student_id: 4,
        student_name: 'Deva Kumar',
        student_age: '24'
    },

    {
        student_id: 5,
        student_name: 'Dharun',
        student_age: '24'
    }
]


const newStudent = {
                            student_id: 6,
                            student_name: 'Ibrahim',
                            student_age: 25
                        }


export const studentHandleAction = (state,action) => {

    console.log(action);

    

    switch(action.type){
        case 'add': return [...state, newStudent];

        case 'update':  const update =  state.map((student,index) => {
                           if(index === action.id){
                                student.student_id = 101
                                student.student_name = 'John Doe'
                                student.student_age = 35
                           }
                           return student;
                        })
                        return update;


        case 'delete':  const deleteProfile =state.filter((student,index) => {
                            return index !== action.id;
                        });
                        return deleteProfile;
    }
}