import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

export default function Error({ status }) {
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    }[status];
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="430"
                height="430"
                fill="none"
                viewBox="0 0 430 430"
            >
                <g
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                >
                    <path
                        stroke="#203d51"
                        d="m226.4 88.5 139 240.8c5 8.7-1.3 19.5-11.3 19.5h-278c-10 0-16.3-10.9-11.3-19.5l139-240.8c5-8.7 17.5-8.7 22.6 0"
                    />
                    <path
                        stroke="#e9c05b"
                        d="M217.8 259h-5.4c-7.4 0-13.5-5.8-13.8-13.2l-2.8-57.9c-.5-9.4 7-17.2 16.4-17.2h6c9.4 0 16.8 7.8 16.4 17.2l-2.8 57.9c-.6 7.4-6.6 13.2-14 13.2m-2.7 57.8c8.782 0 15.9-7.119 15.9-15.9s-7.118-15.9-15.9-15.9-15.9 7.119-15.9 15.9 7.119 15.9 15.9 15.9"
                    />
                </g>
            </svg>
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="font-bold text-xl">{description}</div>
            <Button
                variant="secondary"
                size="sm"
                className="mt-3"
                onClick={() => router.get(route("client.index"))}
            >
                Retournez vers la page d'accueil
            </Button>
        </div>
    );
}
