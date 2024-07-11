import axios from 'axios'
import { createUserWithEmailAndPassword, onIdTokenChanged } from "firebase/auth"
import { useEffect } from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header_Login from "../../components/Header_Login"
import { auth } from "../../firebase"
import './sign_up.scss'
const Sign_up = () => {
    
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const navigate = useNavigate()
    // useEffect(() => {
    //     putData()
    // },[])
    const nav_signUp = (e) => {
    navigate('/login')
  }
    const putData = async (token) => {
    try {
        const res = await axios.post("http://localhost:5000/users/", {
            firstName: firstName,
            lastName: lastName,
            email: email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (err) {
        console.log(err);
    }
};

    const handleSignup = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.getIdToken().then((tok) => {
                    putData(tok)
                }).catch((err) => {
                    return setError(err)
                })
                navigate('/login')
            }).catch((error) => {
            setError(error)
            })
        
    }
    return (
        <div>
            <Header_Login></Header_Login>
            <div className="wrapper" id="form_wrapper">
                <div id="create_wrapper"><div id="Create" className="head">Create Account</div></div>
            <form className='form' onSubmit={handleSignup}>
                    <div className="form_wrapper">
                        <div className="head">First Name</div>
                        <div className="input_wrapper"><input type="text" onChange={e => {
                            setFirstName(e.target.value)
                        }} /></div></div>
                    <div className="form_wrapper">
                        <div className="head">Last Name</div>
                        <div className="input_wrapper"><input type="text" onChange={e => {
                            setLastName(e.target.value)
                        }}/></div></div>
                    <div className="form_wrapper"><div className="head">Email</div>
                        <div className="input_wrapper"><input type="email" onChange={e => { setEmail(e.target.value) }}/></div></div>
                    <div className="form_wrapper">
                        <div className="head">Password</div>
                        <div className="input_wrapper"><input type="password" onChange={e => { setPassword(e.target.value) }}/></div></div>
                    <div id="acc_wrapper" className="input_wrapper">
                    < button type="submit" id="acc">CREATE ACCOUNT</button>
                    </div>
            {/*if error state is false then span wont be seen*/}
                    <div id='or_wrapper'><span id='or'>OR</span></div>
                    <div id="signin_wrapper" className="input_wrapper" onClick={nav_signUp}>
              Sign In
              </div>
            </form>
            
            </div>

        </div>
    )
}

export default Sign_up