import React from "react";
import { Link } from "react-router-dom";
export default function AddTask() {
    return (
        <div className="container mt-5">
           
            <form className="mx-auto w-50 shadow p-5">
            <Link className="btn btn-primary">Home</Link>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label mt-5">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-primary">Add</button>
            </form> 
        </div>
    )
}