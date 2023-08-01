import AppLayout from "../layouts/AppLayout.jsx";
import InputLabel from "../components/InputLabel.jsx";
import TextInput from "../components/TextInput.jsx";
import InputError from "../components/InputError.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import {useState} from "react";

const Profile = () => {
    const [user , setUser] = useState({
        name: "",
        email: "",
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
            <AppLayout>

                {/*Page Heading*/}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>
                    </div>
                </header>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update your account's profile information and email address.
                                </p>
                            </header>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        required
                                        isFocused
                                        autoComplete="name"
                                        name="name"
                                        value={user.name}
                                        onChange={handleInputChange}
                                    />

                                    <InputError className="mt-2" message="" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        required
                                        autoComplete="username"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputChange}
                                    />

                                    <InputError className="mt-2" message="" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton type="submit">Save</PrimaryButton>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </AppLayout>
        </>
    )
}
export default Profile
