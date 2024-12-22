import { AppLogo } from "@/Components/ui/app-logo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex items-center bg-muted">
            <div className="hidden md:flex w-1/2 h-screen flex-col sm:justify-center items-center bg-secondary">
                <img
                    src="/assets/sidi-el-noui-logo-removebg.png"
                    className="object-content w-1/3 md:w-2/3 rounded-xl relative z-10  hover:corsur-pointer  transition-transform duration-300 hover:scale-105 "
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col sm:justify-center items-center pt-6 sm:pt-2 bg-muted">
                <div>
                    <Link href="/">
                        <AppLogo className="w-20 h-20" />
                    </Link>
                </div>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
