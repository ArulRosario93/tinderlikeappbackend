import { Types } from "ably/promises";
require('./browser/static/ably-node.js')
import * as Ably from "ably/promises";

(async () => {

    console.log("Oh hai! 🖤");

    const optionalClientId = "optionalClientId"; // When not provided in authUrl, a default will be used.
    const ably = new Ably.Realtime.Promise({ authUrl: `/api/ably-token-request?clientId=${optionalClientId}` });
    const channel = ably.channels.get("Tinder-Like-backend");

    await channel.subscribe((msg: Types.Message) => {
        console.log("Ably message received", msg);
        document.getElementById("response").innerHTML += "<br />" + JSON.stringify(msg);
    });

    channel.publish("hello-world-message", { message: "Hello world!" });
})();

export { };
