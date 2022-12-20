import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { Button, Form } from "react-bootstrap";

const Edit = () => {
  const [name, setname] = useState(" ");
  const [Age, setAge] = useState(" ");
  const [id, setid] = useState(" ");

  const navigate = useNavigate();

  var index = Home.map(function(e){
    return e.id;
  }).indexOf(id);

  const handlesubmit = (e) => {
    e.preventDefault();

    let a = Home[index];
    a.Name = name;
    a.Age = Age;
   a.id=id;

    navigate("/");
  };
  useEffect(() => {
    setname(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setid(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Control
            type="text"
            value={Age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handlesubmit(e)} type="submit">
          update
        </Button>
      </Form>
    </div>
  );
};
export default Edit;
