import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;

    const newTodo = {
      id: v4(),
      title,
      status,
      date: new Date(),
    };
    console.log(newTodo, "newttofo");

    // fetch("http://localhost:3000/todos", { method: "POST", body: JSON.stringify(newTodo) })
    //   .then(() => setTodos((prev)=>[...prev,newTodo]))
    //   .catch((err) => console.log(err));

    axios
      .post("http://localhost:3000/todos", newTodo).then(() =>{
        toast.success('Todo eklendi')
       setTodos((prev)=>[...prev,newTodo])}).catch((err) => alert('sorun oluştu'))
     
     
      
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container d-flex justify-content-center gap-3 my-5
"
      >
        <input type="text" className="form-control shadow " />
        <select className="form-select shadow">
          <option value="daily">Günlük</option>
          <option value="job">İş</option>
          <option value="important">Önemli</option>
        </select>
        <button className="btn btn-primary shadow">Gönder</button>
      </form>
    </>
  );
};

export default Form;
