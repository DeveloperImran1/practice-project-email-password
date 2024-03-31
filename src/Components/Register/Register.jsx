import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('')

    // password show and hide
    const [passwordShow, setPasswordShow] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsField = e.target.terms.checked;
        console.log(name, email, password, termsField)


        // reset error and success message
        setRegisterError('');
        setRegisterSuccess('')


        // password validation
        if (password.length < 6) {
            return setRegisterError("Password must be longer of 6 charecter")
        }
        else if(!termsField){
            return setRegisterError("Please accept terms and condition rules")
        }
        else if (!/[A-Z]/.test(password)) {
            return setRegisterError('Password should have at least one upper case characters.')
        }
        else if (!/[a-z]/.test(password)) {
            return setRegisterError('Password should have at least one upper case characters.')

        }
        else if (!/[1-9]/.test(password)) {
            return setRegisterError('Password shod have al least 1 number')
        }


        // aivabe all condition aksathe dila vinno vinno message show kora jaina.
        // else if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
        //     return setRegisterError('Password should have at least one upper case characters.')
        // }


        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setRegisterSuccess("Your data is successfully register");

                // Update profile
                updateProfile( result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"  // aikhane photoURL property er value user er theke name, email er moto kore nia bosia dita hobe.
                })

                // send verification email:
                sendEmailVerification(result.user)
                .then(success => {
                    alert('Check Your email for verification')
                })
            })
            .catch(err => {
                console.error(err)
                setRegisterError(err.message)
            })
    }

    return (
        <div>
            <h3 className="text-3xl">Please Register:</h3>
            <div className="w-[50%] mx-auto ">
                <form onSubmit={handleSubmit}>

                    <label className="input input-bordered flex items-center gap-2 my-1">
                        <input type="text" name='name' className="grow" placeholder="Your Name" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 my-1">
                        <input type="email" name='email' className="grow" placeholder="Email" />
                    </label>

                    <label className="input relative input-bordered flex items-center gap-2 mb-1">
                        <input type={passwordShow ? 'text' : "password"}
                            name='password' className="grow"
                            placeholder="Password" />

                        <p className="absolute right-2" onClick={() => setPasswordShow(!passwordShow)}>
                            {passwordShow ? <FaEyeSlash></FaEyeSlash>: <FaEye></FaEye> }
                        </p>

                    </label>
                    <label className=" flex items-center justify-left my-3">
                    <input type="checkbox" name="terms"  className="checkbox  border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
                    <p>Terms and condition</p>
                    </label>

                    <label className="input  input-bordered flex items-center gap-2 mb-1">
                        <input type="submit" className="grow" />
                    </label>

                </form>

                {/* show error message if available error  */}
                {
                    registerError && <p className="text-red-500"> {registerError} </p>
                }
                {
                    registerSuccess && <p className="text-green-500">{registerSuccess}</p>
                }

                <p>Already have an acount? Please <Link to="/login" className="font-bold text-green-700">Login</Link> </p>
            </div>

        </div>
    );
};

export default Register;