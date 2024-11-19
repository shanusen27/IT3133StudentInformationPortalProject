import './App.css';
import{ students } from './data/StudentsDB';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Students Information Portal</h1>
      <hr/>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
