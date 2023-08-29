import React ,{useState}from "react";
import { Link } from "react-router-dom";
export default function EditTask() {
    const [inputval,setInputval]=useState({
        title:"",
        description:""
    })
    const setData=(e)=>{
        console.log(e.target.value);
        const{name,value}=e.target;
        setInputval((preval)=>{
            return{
                ...preval,[name]:value
            }
        })
    }
    return (
        <div className="container mt-5">
           
            <form className="mx-auto w-50 shadow p-5">
            <Link className="btn btn-primary" to='/'>Home</Link>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label mt-5">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={setData} value={inputval.title}/>
                </div>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" onChange={setData} value={inputval.description}/>
                </div>
                <button className="btn btn-primary">Update</button>
            </form> 
        </div>
    )
}