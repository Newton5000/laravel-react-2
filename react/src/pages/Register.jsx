import GuestLayout from "../layouts/GuestLayout.jsx";
import InputLabel from "../components/InputLable.jsx";
import TextInput from "../components/TextInput.jsx";
import InputError from "../components/InputError.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";

function Register() {
    return (
       <>
           <GuestLayout>
               <form>

                   <div className="mt-4">
                       <InputLabel value="Name" />

                       <TextInput
                           id="name"
                           type="text"
                           classes="my-1 block w-full"
                           required
                           autofocus
                           autocomplete="name"
                       />

                       <InputError className="my-1" message="" />
                   </div>

                   <div className="mt-4">
                       <InputLabel value="Email" />

                       <TextInput
                           id="email"
                           type="email"
                           classes="my-1 block w-full"
                           required
                           autofocus
                           autocomplete="email"
                       />

                       <InputError className="my-1" message="" />
                   </div>

                   <div className="mt-4">
                       <InputLabel value="Password" />

                       <TextInput
                           id="password"
                           type="password"
                           classes="my-1 block w-full"
                           required
                           autofocus
                           autocomplete="username"
                       />

                       <InputError className="my-1" message="" />
                   </div>

                   <div className="flex items-center justify-end mt-4">
                       <PrimaryButton type="submit" classes="ml-4" text={"Register"} >Submit</PrimaryButton>
                   </div>
               </form>
           </GuestLayout>
       </>
    )
}

export default Register
