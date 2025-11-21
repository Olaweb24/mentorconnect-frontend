import { io } from "socket.io-client";

// Connect to backend Socket.IO server
export const socket = io("http://localhost:5000", {
  autoConnect: false, // we will manually connect in components
  withCredentials: true
});
