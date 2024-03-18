import { NavLink } from "react-router-dom";
import "./Home.scss"
import axios from 'axios' 
import { useEffect, useState } from "react";
const Home= ()=>{
    const logout = ()=>{
        localStorage.removeItem("user")
        window.location.reload();
    }

    const [users,setUsers]= useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const {data,status} = await axios.get("http://localhost:3000/users")
       if(status ===200){
        setUsers(data)
       }
    }
 return(
    <>
      <div>
        <div>
            <NavLink to={"/home/add"} className={"btn"}>add Employe</NavLink>
            <button> buttun</button>
            {users.map((user)=>{
                <div className="user" key={user.id}>
                <span>{user.id}</span>
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
                <span>{user.email}</span>
                <span>{user.salary}</span>
                <span>{user.gender}</span>
                <NavLink to={`/home/user/${user.id}`} className={"btn"}>show</NavLink>
                <NavLink to={}>
                </NavLink>
            </div>
                
            })}
        </div>
      </div>
    </>
 )
}
export default Home