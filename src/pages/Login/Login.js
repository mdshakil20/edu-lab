import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const Login = () => {
    const {signIn,providerLogin,providerLoginGithub} = useContext(AuthContext);

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleGithubSignIn= () => {
        providerLogin(GithubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        providerLogin(GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    const submitHandle = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // setError('');
            // if(user.emailVerified){
            //     navigate(from, {replace: true});
            // }
            // else{
            //     toast.error('Your email is not verified. Please verify your email address.')
            // }
        })
        .catch(error => {
            console.error(error)
            // setError(error.message);
        })
        .finally(() => {
            // setLoading(false);
        })


    }
    return (
        <div className="flex dark:bg-black">
            <LeftSideBar></LeftSideBar>
            <section className="mt-3 mx-auto mb-10 bg-gray-50 dark:bg-gray-900">
                <div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-blue-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={submitHandle} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Link className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                    focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-primary-600
                                         dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                            <button style={{marginTop:6}} type="" onClick={handleGoogleSignIn} className="mt-0 w-full text-white bg-violet-500 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                    focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-primary-600
                                         dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in With Google</button>
                            <button style={{marginTop:6}} type="" onClick={handleGithubSignIn} className=" w-full text-white bg-purple-500 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                    focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-primary-600
                                         dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in With Github</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to={'/signup'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Login;