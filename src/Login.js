import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassowrd] = useState('')
    const [profilePic,setProfilePic] = useState('')

    const dispatch = useDispatch();

    const register = () =>{
        if(!name){
            alert('Please Enter Full Name')
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        })
        .catch((err) => alert(err.message))

    }

    const loginFunc = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(authUser => {
            dispatch(login({
                email: authUser.user.email,
                uid: authUser.user.uid,
                displayName: authUser.user.displayName,
                profilePic: authUser.user.photoURL
            }))
        })
        .catch((err) => alert(err.message))
    }

    return (
        <div className="login">
            <img src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="" />
            <form onSubmit={loginFunc}>
                <input onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text" />
                <input onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile Pic Url" type="text" />
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input onChange={(e) => setPassowrd(e.target.value)} placeholder="Password" type="password" />
                <button type="submit" onSubmit={loginFunc}>Sign In</button>
            </form>
            <p>Not a Member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
