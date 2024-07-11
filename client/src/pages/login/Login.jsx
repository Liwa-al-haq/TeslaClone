
import './login.scss'
import Header_Login from '../../components/Header_Login'
import { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'
import { AuthContext } from '../../contexts/AuthContext'
const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const navigate = useNavigate()
  
  const {dispatch} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
      
        const user = userCredentials.user;
        user.getIdToken().then((tok) => {
          setToken(tok)
          console.log(tok)
        dispatch({ type: "LOGIN", payload: { user, tok }  })
        })
        
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }
  const nav_signUp = (e) => {
    navigate('/signup')
  }
    return (
      <div className="login">
        <Header_Login></Header_Login>
        
        <div id="form-wrapper">
          <div id="se_wrapper">
        <div id="sign_in">Sign In</div>
            
            </div>
          <form onSubmit={handleLogin}>
          <div id="email_wrapper">
        <input type="email" placeholder="email" onChange={e => { setEmail(e.target.value) }} id='email_input'/>
              {/*Whatever is typed in email box that gets put into the email */}
            </div>
            <div id='pass_wrapper'>
              <input type="password" placeholder="password" onChange={e => {setPassword(e.target.value) }} id='pass_input'/>
            </div>
              {error && <div id='err_wrapper'><span className='err'>Wrong email or password</span></div>}
            <div id="login_wrapper">
              <button type="submit" id="login">LOGIN</button>
              </div>
            {/*if error state is false then span wont be seen*/}
            <div id='or_wrapper'><span id='or'>OR</span></div>
            <div id="create_wrapper" onClick={nav_signUp}>
              CREATE ACCOUNT
              </div>
          </form>
          </div>
    </div>
    )
}

export default Login