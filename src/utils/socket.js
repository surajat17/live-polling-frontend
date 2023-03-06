import io from "socket.io-client";
export const ENDPOINT = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : 'https://backend-polling.vercel.app';



const socket = io(ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
});

export default socket;
