import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import details from "./array";

export default function App() {
  console.log(details);
  let history = useNavigate();
  const [data,setData] = useState(details);
  const tstyle = { border: "2px solid green", width: "40%" };
  const tdstyle = { border: "1px solid #dddddd", width: "40%" };

  function deleted(id) {
    const index = data
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    data.splice(index, 1);
    history("/");
  }
  function update(id, name, password) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", password);
  };
 
  return (
    <div>
      <Link to={`/create`}>
        <button>Create</button>
      </Link>
      <table style={tstyle}>
        <thead style={tdstyle}>
          <tr>
            <td>Name</td>
            <td>Password</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {data.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.Name}</td>
              <td>{detail.Password}</td>
              <td>
                <Link to={`/edit`}>
                  <button
                    onClick={(e) =>
                      update(detail.id, detail.Name, detail.Password)
                    }
                  >
                    Update
                  </button>
                </Link>
              </td>

              <td>
                <button onClick={(e) => deleted(detail.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
