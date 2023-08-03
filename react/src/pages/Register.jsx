import GuestLayout from "../layouts/GuestLayout.jsx";
import InputLabel from "../components/InputLable.jsx";
import TextInput from "../components/TextInput.jsx";
import InputError from "../components/InputError.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Register() {

    axios.defaults.withCredentials = true

    const [user , setUser] = useState({})

    const [pageErrors , setPageErrors] = useState({})

    const [serverError , setServerError] = useState("")

    const [form , setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })
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
            setServerError("something went wrong")
        })

        let register
        if (cookie) {
            register = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation,
                name: form.name,
            })
                .catch((error) => {
                    setPageErrors(error.response.data)
                })
        }

        if (register) {
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
                       <InputLabel value="Name" />

                       <TextInput
                           id="name"
                           type="text"
                           className="my-1 block w-full"

                           autoFocus
                           autoComplete="name"
                           value={form.name}
                           name="name"
                           onChange={handleInputChange}
                       />

                       { Object.keys(pageErrors).length > 0 ?
                           <div>
                               { Object.keys(pageErrors.errors).length > 0 ?
                                   <div>{
                                       pageErrors.errors.name ?
                                           <InputError className="my-1" message={pageErrors.errors.name} />
                                           : '' }
                                   </div>
                                   : '' }
                           </div>
                           : '' }
                   </div>

                   <div className="mt-4">
                       <InputLabel value="Email" />

                       <TextInput
                           id="email"
                           type="email"
                           className="my-1 block w-full"
                           required
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
                           autoComplete="passowrd"
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

                   <div className="mt-4">
                       <InputLabel value="Confirm Password" />

                       <TextInput
                           id="password_confirmation"
                           type="password"
                           className="my-1 block w-full"
                           required
                           autoComplete="password_confirmation"
                           value={form.password_confirmation}
                           name="password_confirmation"
                           onChange={handleInputChange}
                       />

                       { Object.keys(pageErrors).length > 0 ?
                           <div>
                               { Object.keys(pageErrors.errors).length > 0 ?
                                   <div>{
                                       pageErrors.errors.password_confirmation ?
                                           <InputError className="my-1" message={pageErrors.errors.password_confirmation} />
                                           : '' }
                                   </div>
                                   : '' }
                           </div>
                           : '' }
                   </div>

                   <div className="flex items-center justify-end mt-4">
                       <Link
                           to="/login"
                           className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                       >
                           Already registered?
                       </Link>

                       <PrimaryButton type="submit" className="ml-4">
                           Register
                       </PrimaryButton>
               </div>
               </form>
           </GuestLayout>
       </>
    )
}

export default Register
