import GuestLayout from "../layouts/GuestLayout.jsx";
import InputError from "../components/InputError.jsx";
import InputLabel from "../components/InputLable.jsx";
import TextInput from "../components/TextInput.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Login (){

axios.defaults.withCredentials = true

    const [form , setForm] = useState({
        email: "botypi@mailinator.com",
        password: "bootyclap69",
    })

    const [user , setUser] = useState({})

    const [pageErrors , setPageErrors] = useState({})

    const [serverError , setServerError] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }

    const submit = async (e) => {
        e.preventDefault()
        let cookie = await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`).catch((e) => {
            setServerError( "something went wrong")
        })

        let login
        if (cookie) {
            login = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
                email: form.email,
                password: form.password,
                remember: form.remember,
            })
                .catch((error) => {
                    setPageErrors(error.response.data)
                })
        }

        if (login) {
            let {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`).catch((e) => {
                setServerError("something went wrong")
            })
            setUser(data)
        }
    }

    return (
        <>
            <GuestLayout>
                { user.name }
                { user.id }
                { user.email }
                <div className="mb-4 font-medium text-sm text-red-600">
                    { serverError }
                </div>

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            className="my-1 block w-full"
                            required
                            autoFocus
                            autoComplete="email"
                            value={form.email}
                            name="email"
                            onChange={handleInputChange}
                        />

                        { Object.keys(pageErrors).length > 0 ?
                            <div>
                                { Object.keys(pageErrors.errors).length > 0 ?
                                    <div>{
                                        pageErrors.errors.email ?
                                            <InputError className="my-1" message={pageErrors.errors.email} />
                                        : '' }
                                    </div>
                                    : '' }
                            </div>
                        : '' }
                    </div>

                    <div className="mt-4">
                        <InputLabel value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            className="my-1 block w-full"
                            required
                            autoComplete="password"
                            value={form.password}
                            name="password"
                            onChange={handleInputChange}
                        />

                        { Object.keys(pageErrors).length > 0 ?
                            <div>
                                { Object.keys(pageErrors.errors).length > 0 ?
                                    <div>{
                                        pageErrors.errors.password ?
                                            <InputError className="my-1" message={pageErrors.errors.password} />
                                            : '' }
                                    </div>
                                    : '' }
                            </div>
                            : '' }
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
