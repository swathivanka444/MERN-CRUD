import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function AllTasks() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getTasks()
    }, []);
    const getTasks = () => {
        axios.get("http://localhost:4200/AllTasks/")
            .then(response => {
                setData(response.data); // Assuming the API returns JSON data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const deleteTask = (taskId) => {
        fetch(`http://localhost:4200/DeleteTask?taskId=${taskId}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Task deleted successfully', data);
                // After successful deletion, fetch the updated list of tasks
                fetch("http://localhost:4200/AllTasks")
                    .then((response) => response.json())
                    .then((updatedData) => {
                        // Update the state with the new list of tasks
                        setData(updatedData);
                    })
                    .catch((error) => {
                        console.error('Error fetching data after deletion:', error);
                    });
            })
            .catch((error) => {
                console.error('Error deleting task:', error);
            });
    }
    const handleUpdate = (task) => {
        let updatedData = data.find(d => {
            if (d._id == task._id) {
                d.mark = !task?.mark
                return data
            }
        })
        axios
            .put(`http://localhost:4200/UpdateTask/${task?._id}`, updatedData
            )
            .then((response) => {
                console.log("update", response);
                getTasks()
                // setTask(response.data);
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="mt-3">
                <Link className="btn btn-success" to="/AddTask">Add Task</Link>
            </div>
            <table className="table mt-5">
                <thead>
                    <tr className="bg-success text-center">

                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        <th scope="col">Mark as Completed  </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((task) => (
                        <tr key={task._id} className="text-center">
                            <td>{task.title}</td>
                            <td >{task.description}</td>
                            <td >
                                <Link className='btn btn-primary me-3' to={{
                                    pathname: `/ViewTask/${task._id}`,
                                    state: { customState: 'hello' },
                                }}>View</Link>
                                <button className='btn btn-danger me-3' onClick={() => deleteTask(task._id)}>Delete</button>
                                <Link className='btn btn-warning me-3' to={{
                                    pathname: `/EditTask/${task._id}`,
                                    state: { customState: 'hello' },
                                }}>Edit</Link>
                            </td>
                            <td >
                                <input type="checkbox" checked={task?.mark} onChange={() => { handleUpdate(task) }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}