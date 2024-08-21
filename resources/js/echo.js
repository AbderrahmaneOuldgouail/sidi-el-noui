import Echo from "laravel-echo";
import { headers } from "next/headers";

import Pusher from "pusher-js";
window.Pusher = Pusher;

// Pusher.logToConsole = true;

var csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

const options = {
    broadcaster: "pusher",
    key: "94e1925c34d130d44e27",
    cluster: "eu",
    forceTLS: true,
    channelAuthorization: {
        transport: "jsonp",
        endpoint: "/broadcasting/auth",
        headers: { "X-CSRF-Token": csrfToken },
    },
};

window.Echo = new Echo({
    ...options,
    client: new Pusher(options.key, options),
});
