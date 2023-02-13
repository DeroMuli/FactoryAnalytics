import { useEffect, useState } from "react";
import { SOCKET_URL } from "@env";

type Data = {
  temp: number;
  speed: number;
};

export default (): Data => {
  const [data, setData] = useState<Data>({ temp: 0, speed: 0 });
  let ws = new WebSocket(SOCKET_URL);
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (event: MessageEvent) => {
      let data = JSON.parse(event.data) as { speed: number; temp: number };
      if (data !== undefined) {
        setData(data);
      } else {
        console.log("undefined data");
      }
    };
    ws.onerror = (ev: ErrorEvent) => {
      console.log(ev);
    };
    return ws.close();
  }, []);
  return data;
};
