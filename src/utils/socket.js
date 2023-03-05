import io from "socket.io-client";
export const ENDPOINT = "https://backend-polling.vercel.app"


const socket = io(ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
});

export default socket;
