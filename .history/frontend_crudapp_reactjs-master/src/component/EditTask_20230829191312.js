import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function EditTask() {
    const { taskId } = useParams();
    const [tassk, setTask] = useState({});
    console.log('taskId', taskId)
    useEffect(() => {
        axios
            .get(`http://localhost:4200/UpdateTask?taskId=${taskId}`)
            .then((response) => {
                setTask(response.data); // Assuming the API returns JSON data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [taskId]);
    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:4200/UpdateTask/${taskId}`, { ...tassk, completed: false })
            .then((response) => {
                console.log("update", response);
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
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
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}