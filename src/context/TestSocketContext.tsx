//added to avoid unncessary calls to websocket server ... provides a singleton like pattern to the websocket connection ... check for other alternatives
import React, { createContext, useContext } from "react";
import useWebSocketData from "../hooks/usewebsocketdata";
import { TEST_MACHINE_SOCKET_URL } from "@env";

type SocketContextType = ReturnType<typeof useWebSocketData>;

const MockSocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const useTestSocket = () => {
  const socket = useContext(MockSocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};

const TestSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useWebSocketData(TEST_MACHINE_SOCKET_URL);
  return (
    <MockSocketContext.Provider value={socket}>
      {children}
    </MockSocketContext.Provider>
  );
};

export default TestSocketProvider;
