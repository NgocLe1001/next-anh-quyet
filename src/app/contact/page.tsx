'use client';

import { useRouter } from "next/navigation";
export default function Contact() {
    const router = useRouter();

    const onGoHome = () => {
        router.push('/');
    }

    <div className="flex flex-col gap-10 justify-center items-center h-[100vh]">
        Contact page
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[200px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onGoHome}>
            Go to home
        </button>
    </div>
}