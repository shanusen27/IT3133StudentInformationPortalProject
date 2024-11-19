import '../assests/css/compo.css';
import {useState} from 'react';
import Profile from './Profile';

export default function StudentTable(prosps){
    const [stu, setStu]= useState(prosps.students[0]);
    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table border="1">
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prosps.students.map( student=>
                                <tr>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.address.country}</td>
                                    <td><button id={student.studentID} onClick={()=>setStu(student)}>View</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='rightDiv'>
                <Profile stu={stu}/>
            </div>
        </div>
    );
}