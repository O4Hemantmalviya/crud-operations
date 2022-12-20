import React, { useState } from "react";
import Home from "./Home";
import { useNavigate,} from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Add = () => {
  const [name, setname] = useState("");
  const [Age, setAge] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const ids = uuid();

    let uniqueId = ids.slice(0, 8);
    let a = name,
      b = Age;
    Home.push({ id: uniqueId, Name: a, Age: b });
    navigate("/");
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            required
            onChange={(e) => setname(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group  controlId="formAge">
          <Form.Control
            type="text"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handlesubmit(e)} type="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};
export default Add;
