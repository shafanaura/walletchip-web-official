import { io } from "socket.io-client";

const socket = io("http://23.21.108.250:8000/");

export default socket;
