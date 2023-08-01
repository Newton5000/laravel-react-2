import GuestLayout from "../layouts/GuestLayout.jsx";
import InputError from "../components/InputError.jsx";
import InputLabel from "../components/InputLable.jsx";
import TextInput from "../components/TextInput.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";

function Login() {
    return (
        <>
            <GuestLayout>
                <form>
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
                            autocomplete="password"
                        />

                        <InputError className="my-1" message="" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton type="button" classes="ml-4" text={"Log in"} />
                    </div>
                </form>
            </GuestLayout>
        </>
    )
}

export default Login
