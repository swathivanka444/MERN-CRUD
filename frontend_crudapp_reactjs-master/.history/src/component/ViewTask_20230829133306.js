import React from "react";
import { Link } from "react-router-dom";
export default function ViewTask() {
    return (
        <div className="container mt-5">
            <Link className="btn btn-primary" to="/">Home</Link>
            <div className="row">
                <div className="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item active mt-5" aria-current="true">Task Details</li>
                        <li class="list-group-item">Title:</li>
                        <li class="list-group-item">Description:</li>
                        
                    </ul>

                </div>
            </div>
        </div>
    )
}