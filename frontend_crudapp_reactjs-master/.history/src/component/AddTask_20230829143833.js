import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function AddTask() {

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
    
    const addTaskData=async(e)=>{
        e.preventDefault();
        const {title,description}=inputval;
        const res=await fetch("http://localhost:4200/AddTask",{
            method:"POST",
            headers:{
                "Content-Type":"application"
            },
            body:JSON.stringify({
                title,description
            })
        });
        const data=await res.json();
        console.log("data",data);
        if(res.status===422 || !data)
        {
            alert("Error")
        }
        else{
            setInputval(data);
            alert("Data Added");
        }
    }

    return (
        <div className="container mt-5">
           
            <form className="mx-auto w-50 shadow p-5">
            <Link className="btn btn-primary" to='/'>Home</Link>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" class="form-label mt-5">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={setData} value={inputval.title}/>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" onChange={setData} value={inputval.description}/>
                </div>
                <button className="btn btn-primary" onClick={addTaskData}>Add</button>
            </form> 
        </div>
    )
}