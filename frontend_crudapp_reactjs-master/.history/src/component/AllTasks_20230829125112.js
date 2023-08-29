import React from "react";
import { Link } from "react-router-dom";
export default function AllTasks() {
    return (
        <div className="container mt-5">
            <div className="mt-3">
                <Link className="btn btn-success">Add Task</Link>
            </div>
            <table class="table mt-5">
                <thead> 
                    <tr className="bg-success">
                        
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        <th scope="col">Mark as Completed  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button className="btn btn-primary me-3">View</button>
                            <button className="btn btn-danger me-3" >Delete</button>
                            <button className="btn btn-warning me-3">Edit</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}