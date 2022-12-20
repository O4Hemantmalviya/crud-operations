import React from "react";
import { Button, Table } from "react-bootstrap";
import Home from "./Home";
import { useNavigate, Link } from "react-router-dom";

const Employes = () => {
  const navigate = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("id", id);
  };
  const handledelete = (id) => {
    var index = Home.map(function (e) {
      return e.id;
    }).indexOf(id);

    Home.splice(index, 1);
    navigate("/");
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Home && Home.length > 0
            ? Home.map((item) => {
                return (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>
                      <Link to="edit">
                        <Button
                          onClick={() =>
                            handleEdit(item.id, item.Name, item.Age)
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button onClick={() => handledelete(item.id)}>
                        delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "no data founds"}
        </tbody>
      </Table>
      <br />
      <br />
      <Link to="/create">
        <Button>create</Button>
      </Link>
    </div>
  );
};
export default Employes;
