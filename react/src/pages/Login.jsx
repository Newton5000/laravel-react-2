import GuestLayout from "../layouts/GuestLayout.jsx";
import InputError from "../components/InputError.jsx";
import InputLabel from "../components/InputLable.jsx";
import TextInput from "../components/TextInput.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

function Login() {
    const [user , setUser] = useState({
        email: "",
        password: "",
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
    return (
        <>
            <GuestLayout>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <InputLabel value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            className="my-1 block w-full"
                            required
                            autoFocus
                            autoComplete="email"
                            value={user.email}
                            name="email"
                            onChange={handleInputChange}
                        />

                        <InputError className="my-1" message="" />
                    </div>

                    <div className="mt-4">
                        <InputLabel value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            className="my-1 block w-full"
                            required
                            autoComplete="password"
                            value={user.password}
                            name="password"
                            onChange={handleInputChange}
                        />

                        <InputError className="my-1" message="" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            to="/register"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Don't have an account?
                        </Link>


                        <PrimaryButton className="ml-4">
                        Log in
                    </PrimaryButton>
                </div>

                </form>
            </GuestLayout>
        </>
    )
}

export default Login
