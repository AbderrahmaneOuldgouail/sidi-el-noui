import Echo from "laravel-echo";
const appKey = import.meta.env.VITE_PUSHER_APP_KEY || "key";
const appCluster = import.meta.env.VITE_PUSHER_APP_CLUSTER || "key";

import Pusher from "pusher-js";
window.Pusher = Pusher;

var csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

const options = {
    broadcaster: "pusher",
    key: appKey,
    cluster: appCluster,
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
