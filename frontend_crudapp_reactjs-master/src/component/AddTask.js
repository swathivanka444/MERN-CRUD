import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function AddTask() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [inputval, setInputval] = useState({
        title: "",
        description: "",
        mark: false
    })
    const handleChange = (e) => {
        setInputval({ ...inputval, [e.target.name]: e.target.value })
    }
    const addTaskData = async (e) => {
        e.preventDefault();
        if (inputval && inputval.title && inputval.description) {
            const res = await fetch("https://taskmanagementcrud.onrender.com/AddTask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputval)
            });

            const data = await res.json();
            if (res.status === 201) {
                navigate('/home', { replace: true })
            }
            else {

                setErrorMessage('Data Not Added')
            }
        }
        else if (inputval.title && !inputval.description) {
            setErrorMessage('Please Enter Description');
        }
        else if (!inputval.title && inputval.description) {
            setErrorMessage('Please Enter Title');
        }
        else if (!inputval.title && !inputval.description) {
            setErrorMessage('Please Enter Title & Description');
        }
        else {
            console.log('no error')
        }
    }

    return (
        <div className="container mt-5">
            <form className="mx-auto w-50 shadow p-5">
                <Link className="btn btn-primary" to='/home'>Home</Link>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-5">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={handleChange} value={inputval.title} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" onChange={handleChange} value={inputval.description} />
                </div>
                <p style={{ color: "#DA2517" }}>{errorMessage}</p>
                <button className="btn btn-primary" onClick={addTaskData}>Add</button>
            </form>
        </div>
    )
}