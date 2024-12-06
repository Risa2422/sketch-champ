import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000";
let socket: Socket | null = null;

export const initializeSocket = (userId: string) => {
  if (socket) {
    socket.disconnect();
  }
  socket = io(SOCKET_URL, {
    withCredentials: true, // send cookie
    auth: { userId },
  });
};

export const getSocket = () => {
  if (!socket) throw new Error("Socket not initialized");
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
