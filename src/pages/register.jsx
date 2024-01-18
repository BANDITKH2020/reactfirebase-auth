import { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../libs/firebase'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [errorMessage , setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
        await createUserWithEmailAndPassword(auth , email, password)
        alert('สมัครสมาชิกสำเร็จ')
        navigate('/login')
    } catch (error) {
        setErrorMessage(error.message);
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>สมัครสมาชิก</h2>
      <div className="container">
        <label htmlFor="username">Email</label>
        <input ref={emailRef} type="email" name="username" required />

        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" name="password" required />

        <button type="submit">Register</button>
      </div>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </form>
  )
}

export default Register
