import AppLayout from "../../layouts/AppLayout.jsx";
import InputLabel from "../../components/InputLabel.jsx";
import TextInput from "../../components/TextInput.jsx";
import InputError from "../../components/InputError.jsx";
import PrimaryButton from "../../components/PrimaryButton.jsx";

const CreateToto = () => {
    return (
        <>
            <AppLayout>
                {/*Page Heading*/}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Todo</h2>
                    </div>
                </header>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Todo Information</h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Fill in the form to create new todo item.
                                </p>
                            </header>

                            <form className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        classes="mt-1 block w-full"
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />

                                    <InputError className="mt-2" message="" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="category" value="Category" />

                                    <TextInput
                                        id="category"
                                        classes="mt-1 block w-full"
                                        required
                                        isFocused
                                        autoComplete="category"
                                    />

                                    <InputError className="mt-2" message="" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="status" value="Status" />

                                    <TextInput
                                        id="status"
                                        classes="mt-1 block w-full"
                                        required
                                        isFocused
                                        autoComplete="status"
                                    />

                                    <InputError className="mt-2" message="" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton type="button">Save</PrimaryButton>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </AppLayout>
        </>
    )
}
export  default CreateToto
