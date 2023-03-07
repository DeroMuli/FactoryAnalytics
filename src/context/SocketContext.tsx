//added to avoid unncessary calls to websocket server
import React, { createContext, useContext } from "react";
import useWebSocketData from "../hooks/usewebsocketdata";

type SocketContextType = ReturnType<typeof useWebSocketData>;

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useWebSocketData();
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
