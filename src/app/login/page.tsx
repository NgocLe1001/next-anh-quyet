"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"
import { TOKEN_KEY } from "src/definitions";
import { axiosInstance } from "src/services/axios";
import { LocalStorageHelper } from "src/utils";

interface IFormInput {
    username: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const router = useRouter();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        handleLogin(data)
    }

    const handleLogin = async (_data: IFormInput) => {

        const rs = await axiosInstance.get('42bbd409-e86b-4242-801e-5a7cde743574')
        if (rs.data.token) {
            LocalStorageHelper.setItem(TOKEN_KEY, rs.data.token);
            document.cookie = `token=${TOKEN_KEY}; path=/`;
            router.replace("/");
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <form className="w-[500px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6 mb-6">
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required {...register("username", { required: true, maxLength: 20 })} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required  {...register("password", { required: true, maxLength: 20 })} />
                    </div>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </form>
        </div>
    )
}