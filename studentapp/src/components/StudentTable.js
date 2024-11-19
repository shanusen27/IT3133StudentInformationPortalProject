import '../assests/css/compo.css'
export default function StudentTable(prosps){

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

                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}