'use client';

import { useRouter } from "next/navigation";
import { TOKEN_KEY } from "src/definitions";
import { LocalStorageHelper } from "src/utils";

export default function Home() {
    const router = useRouter();

    const onLogout = () => {
        document.cookie = "token=; path=/;";
        router.push('/login');
        LocalStorageHelper.removeItem(TOKEN_KEY)
    }

    const onGoContact = () => {
        router.push('/contact');
    }
    return (
        <div className="flex flex-col gap-10 justify-center items-center h-[100vh]">
            Home page
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[200px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onLogout}>
                Logout
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[200px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onGoContact}>
                Go to contact page
            </button>
        </div>
    )
}