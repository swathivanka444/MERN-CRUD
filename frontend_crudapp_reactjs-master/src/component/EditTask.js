import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditTask() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const { taskId } = useParams();
    const [tassk, setTask] = useState({});
    useEffect(() => {
        axios
            .get(`https://taskmanagementcrud.onrender.com/UpdateTask?taskId=${taskId}`)
            .then((response) => {
                setTask(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [taskId]);
    const handleUpdate = (e) => {
        e.preventDefault();
        if (tassk && tassk.title && tassk.description) {
            axios.put(`https://taskmanagementcrud.onrender.com/UpdateTask/${taskId}`, { ...tassk, completed: false })
                .then((response) => {
                    console.log("update", response);
                    if (response.status === 200) {
                        navigate('/home', { replace: true })
                    }
                    else {
                        setErrorMessage('Data Not Added')
                    }
                })
                .catch((error) => {
                    console.error("Error updating data:", error);
                });
                
        }
        else if (tassk.title && !tassk.description) {
            setErrorMessage('Please Enter Description');
        }
        else if (!tassk.title && tassk.description) {
            setErrorMessage('Please Enter Title');
        }
        else if (!tassk.title && !tassk.description) {
            setErrorMessage('Please Enter Title & Description');
        }
        else {
            console.log('no error')
        }
    };
    return (
        <div className="container mt-5">

            <form className="mx-auto w-50 shadow p-5">
                <Link className="btn btn-primary" to='/home'>Home</Link>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-5">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={(e) => setTask({ ...tassk, title: e.target.value })} value={tassk.title} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" onChange={(e) => setTask({ ...tassk, description: e.target.value })} value={tassk.description} />
                </div>
                <p style={{ color: "#DA2517" }}>{errorMessage}</p>
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}