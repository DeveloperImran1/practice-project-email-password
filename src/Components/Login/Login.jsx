import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";



const Login = () => {
    const [loginMessage, setLoginMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // user validation 

        // sign in or login user
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // email verification code er maddhome verification korle result.user.emailVerified er value true hobe. Otherwise false thakbe.
                console.log(result)
                if(result.user.emailVerified){
                    setLoginMessage(result.user.email + "You have successfully login!")
                }
                else{
                    alert("Please verify email address.")
                }
            })
            .catch(err => {
                setLoginMessage(err.message)
                console.error(err.message)
            })
    }


    // handleForgetPassword 
    const emailInput = useRef(null);
    const handleForgetPassword = () => {
        const emailValue = emailInput.current.value;
        // validation email
        if(!emailValue){
            return console.log('Please provide an email')
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue) ){
            return console.log("Please Provide an valid email")
        }

        // send verification
        sendPasswordResetEmail(auth, emailValue)
        .then(result => {
            // email thik thakle oi email a verification code jabe.
            alert('Check your email')
        })
        .catch( err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailInput} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="password" className="input input-bordered" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            loginMessage && <p>{loginMessage}</p>
                        }
                    </form>

                    <p>New to this website? Please <Link to="/register" className="font-bold text-green-600">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;