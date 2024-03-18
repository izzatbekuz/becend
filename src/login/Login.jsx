import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { useState } from 'react';
const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const inputHandler = (e) => {
        setUser((prev) => {
            return { ...prev,[e.target.name] : e.target.value }
        })
    }
    const sumbitHandler=()=>{
        if(user.email && user.password){
            localStorage.setItem("user",JSON.stringify(user))
            navigate("/home")
        }
    }
    return (
        <>
            <div className="login">
                <h1>login  page</h1>
                <input onChange={inputHandler} type="email" name='email' />
                <input onChange={inputHandler} type="password" name='password' />
                <button onClick={sumbitHandler}>log in</button>
            </div>
        </>
    )
}
export default Login