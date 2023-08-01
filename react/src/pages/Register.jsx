import GuestLayout from "../layouts/GuestLayout.jsx";
import InputLabel from "../components/InputLable.jsx";
import TextInput from "../components/TextInput.jsx";
import InputError from "../components/InputError.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import {useState} from "react";

function Register() {
    const [user , setUser] = useState({
        name: "",
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
                       <InputLabel value="Name" />

                       <TextInput
                           id="name"
                           type="text"
                           className="my-1 block w-full"
                           required
                           autoFocus
                           autoComplete="name"
                           value={user.name}
                           name="name"
                           onChange={handleInputChange}
                       />

                       <InputError className="my-1" message="" />
                   </div>

                   <div className="mt-4">
                       <InputLabel value="Email" />

                       <TextInput
                           id="email"
                           type="email"
                           className="my-1 block w-full"
                           required
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
                           autoComplete="passowrd"
                           value={user.password}
                           name="password"
                           onChange={handleInputChange}
                       />

                       <InputError className="my-1" message="" />
                   </div>

                   <div className="flex items-center justify-end mt-4">
                       <PrimaryButton type="submit" classes="ml-4">Submit</PrimaryButton>
                   </div>
               </form>
           </GuestLayout>
       </>
    )
}

export default Register
